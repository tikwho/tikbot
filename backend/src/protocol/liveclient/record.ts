// import fs from 'node:fs'
// import path from 'node:path'
import * as fs from 'fs'
import * as path from 'path'
// import debug from 'debug'
// import * as dayjs from 'dayjs'
import * as moment from 'moment'

import * as execa from 'execa'

import * as ffmpeg from 'fluent-ffmpeg'
// let ffmpeg;
// try {
//   ffmpeg = require('fluent-ffmpeg');
// } catch (error) {
//   console.error('未安装依赖: some-module');
// }


// https://github.com/chenfan0/fideo-live-record/blob/3c27dd56014696c393494854fa2661dbfadc5a4a/src/main/ffmpeg/record.ts
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import { SUCCESS_CODE, FFMPEG_ERROR_CODE, UNKNOWN_CODE } from '../../code'
export const UNKNOWN_CODE = -1
export const FFMPEG_ERROR_CODE = {
  USER_KILL_PROCESS: 100,
  CURRENT_LINE_ERROR: 101,
  TIME_OUT: 102,
  MISS_DEP: 103,
  RESOLUTION_CHANGE: 104
}
export const SUCCESS_CODE = 200

// import { RECORD_DUMMY_PROCESS } from '../../const'
export const RECORD_DUMMY_PROCESS = { kill: () => {} }

interface IStreamConfig {
  title: string
  roomUrl?: string
  filename: string
  directory: string
  proxy?: string
  cookie?: string
  interval?: number
  liveUrls?: string[]
  segmentTime?: string | ''
  line: string|number // '0' '1' eg
  status?: number
  convertToMP4: boolean
  detectResolution: boolean
}
type Lang = 'en' | 'cn'
interface IDefaultDefaultSettingsConfig {
  directory: string
  lang: Lang
  xizhiKey?: string
}

type IFfmpegProgressInfo = Record<
  string,
  {
    frames: number
    currentFps: number
    currentKbps: number
    targetSize: number
    timemark: string
    percent?: number
  }
>

interface IDownloadDepProgressInfo {
  showRetry: boolean
  downloading: boolean
  progress: number
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const log = debug('fideo-record-stream')

const log = function(a?:any,b?:any,c?:any,d?:any){
  console.debug('fideo-record-stream',a,b,c,d);
}


const KILL_MESSAGE = 'ffmpeg was killed with signal SIGKILL'

const FLV_FLAG = '.flv'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const recordStreamFfmpegProgressInfo: IFfmpegProgressInfo = {}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setRecordStreamFfmpegProgressInfo = (title: string, progress: any) => {
  recordStreamFfmpegProgressInfo[title] = progress
}

export const recordStreamFfmpegProcessMap = {}

export const setRecordStreamFfmpegProcessMap = (title: string, process: any) => {
  recordStreamFfmpegProcessMap[title] = process
}

export const killRecordStreamFfmpegProcess = (title: string) => {
  const process = recordStreamFfmpegProcessMap[title]

  const isDummy = process === RECORD_DUMMY_PROCESS || !process
  process?.kill('SIGKILL')
  delete recordStreamFfmpegProgressInfo[title]
  delete recordStreamFfmpegProcessMap[title]

  killDetectStreamProcess(title)

  return isDummy
}

const detectStreamProcessMap = {}
const streamResolutionMap = {}
const setDetectStreamProcessMap = (title: string, process: execa.ExecaChildProcess) => {
  detectStreamProcessMap[title] = process
}
const killDetectStreamProcess = (title: string) => {
  const process = detectStreamProcessMap[title]
  process?.kill('SIGKILL')

  delete detectStreamProcessMap[title]
  delete streamResolutionMap[title]
}

const resolutionChangeSet = new Set()
const addResolutionChangeSet = (title: string) => {
  resolutionChangeSet.add(title)
}
const removeResolutionChangeSet = (title: string) => {
  resolutionChangeSet.delete(title)
}

const checkFileExist = async (filepath: string) => {
  return new Promise((resolve) => {
    fs.access(filepath, fs.constants.F_OK, (err) => {
      if (err) {
        log('file not exist: ', filepath)
        setTimeout(() => {
          resolve(false)
        }, 800)
      } else {
        resolve(true)
      }
    })
  })
}

async function convertFlvToMp4(sourcePath: string) {
  if (!(await checkFileExist(sourcePath))) return
  const process = ffmpeg()
  const output = sourcePath.replace(FLV_FLAG, '.mp4')
  let _resolve: (value?: unknown) => void
  const p = new Promise((resolve) => {
    _resolve = resolve
  })

  process
    .addInput(sourcePath)
    .videoCodec('copy')
    .audioCodec('copy')
    .inputFormat('flv')
    .outputFormat('mp4')
    .on('end', () => {
      fs.unlinkSync(sourcePath)
      _resolve()
    })
    .on('error', () => {
      _resolve()
    })
    .save(output)

  return p
}

async function convert(sourcePath: string, convertToMP4 = true) {
  if (!convertToMP4) return
  if (!(await checkFileExist(sourcePath))) return
  const stats = fs.statSync(sourcePath)
  const isDirectory = stats.isDirectory()

  if (isDirectory) {
    await delay(1500)
    const files = fs.readdirSync(sourcePath)
    const flvFiles = files
      .filter((file) => file.endsWith('.flv'))
      .map((file) => path.join(sourcePath, file))

    for (const flvFile of flvFiles) {
      await convertFlvToMp4(flvFile)
    }
  } else {
    await convertFlvToMp4(sourcePath)
  }
}

async function detectStreamResolution(streamConfig: IStreamConfig) {
  const { liveUrls, line, cookie, proxy, title } = streamConfig

  // 检测之前先清除之前的检测数据
  removeResolutionChangeSet(title)

  const process = execa(ffmpeg.ffprobePath, [
    '-v',
    'error',
    '-show_entries',
    'frame=width,height',
    '-select_streams',
    'v',
    '-skip_frame',
    'nokey',
    '-of',
    'csv=p=0',
    '-headers',
    'User-Agent: Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Mobile Safari/537.36',
    ...(proxy ? ['-http_proxy', proxy] : []),
    ...(cookie ? ['-headers', `Cookie: ${cookie}`] : []),
    liveUrls![Number(line)]
  ])

  process.on('error', (error) => {
    console.log('detect stream resolution error: ', error)
    delete detectStreamProcessMap[title]
  })

  process.stdout?.on('data', (data) => {
    const stringData = data.toString() as string
    const [width, height] = stringData.split(',').map((item) => item.replace('\n', ''))

    const prevResolution = streamResolutionMap[title]
    log('width, height: ', width, height)

    if (!prevResolution) {
      streamResolutionMap[title] = {
        width,
        height
      }
    } else {
      const { width: prevWidth, height: prevHeight } = prevResolution

      if (prevWidth !== width || prevHeight !== height) {
        log('resolution change: ', title, width, height)

        addResolutionChangeSet(title)

        killRecordStreamFfmpegProcess(title)

        return
      }

      streamResolutionMap[title] = {
        width,
        height
      }
    }
  })

  setDetectStreamProcessMap(title, process)
}

export async function recordStream(
  streamConfig: IStreamConfig,
  cb?: (code: number, errMsg?: string) => void
) {
  log('start record stream',streamConfig)
  let _resolve!: (
    value:any
  ) => void
  const p: Promise<{ code: number }> = new Promise((resolve) => {
    _resolve = resolve
  })

  const {
    liveUrls,
    line,
    directory,
    filename,
    proxy,
    cookie,
    title,
    segmentTime,
    convertToMP4,
    detectResolution
  } = streamConfig

  detectResolution && detectStreamResolution(streamConfig)

  const secondSegmentTime = Number(segmentTime) * 60
  const isSegmentMode = secondSegmentTime > 0

  // const time = dayjs().format('YYYY.MM.DD-HH.mm.ss')
  const time = moment().format('YYYY.MM.DD-HH.mm.ss');
  const baseOutput = path.resolve(directory, `${filename}-${time}`)
  const output = "cdn/"+isSegmentMode ? path.resolve(baseOutput, `%03d`) : baseOutput
  const convertSource = isSegmentMode ? baseOutput : output + FLV_FLAG

  if (isSegmentMode) {
    fs.mkdirSync(baseOutput)
  }
  // if (recordStreamFfmpegProcessMap[title] !== RECORD_DUMMY_PROCESS) {
  //   _resolve({
  //     code: FFMPEG_ERROR_CODE.USER_KILL_PROCESS
  //   })
  //   /**
  //    * 如果是这种情况，说明是在获取直播地址的时候，用户停止了录制
  //    * 这个回调会在用户执行停止录制的时候被调用，这个时候不需要再次调用停止录制的回调
  //    */
  //   // cb?.(FFMPEG_ERROR_CODE.USER_KILL_PROCESS)
  //   return p
  // }
  //不重复录制
 if (recordStreamFfmpegProcessMap[title]) {
    _resolve({
      code: "recording"
    })
    return p
  }
  setRecordStreamFfmpegProcessMap(title,cb);

  const ffmpegProcess = ffmpeg().addInput(liveUrls![Number(line)])

  ffmpegProcess.inputOptions(['-re'])

  setRecordStreamFfmpegProcessMap(title, ffmpegProcess)

  ffmpegProcess.inputOption(
    '-headers',
    'User-Agent: Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Mobile Safari/537.36'
  )
  if (proxy) {
    ffmpegProcess.inputOption('-http_proxy', proxy)
  }
  if (cookie) {
    ffmpegProcess.inputOption('-headers', `Cookie: ${cookie}`)
  }
  if (secondSegmentTime > 0) {
    ffmpegProcess.outputOptions([
      '-f segment',
      `-segment_time ${secondSegmentTime}`,
      '-reset_timestamps 1'
    ])
  } else {
    // 如果不使用分段，直接保存为 mp4
    ffmpegProcess.outputOptions([
      // '-s 1280x720',        // 设置分辨率为 1280x720 (HD)
      '-b:v 1000k',         // 设置视频比特率为 1000 kbps
      '-b:a 128k',          // 设置音频比特率为 128 kbps
      '-f mp4',
      '-movflags frag_keyframe+empty_moov', // 实时写入 MP4 元数据
      '-reset_timestamps 1'
    ]);
  }

  ffmpegProcess
    .videoCodec('libx264')  // 使用 h264 编码器
    .audioCodec('aac')      // 使用 AAC 音频编码器
    .outputFormat('mp4')
    .output(output + ".mp4")
    //视频/////////////////////////////////////////////////////////
    // .output(output + ".wav")   // 输出 wav 文件
    // .noVideo()              // 仅输出音频
    // .audioCodec('pcm_s16le') // 使用 PCM 编码生成 WAV
    // .outputOptions([
    //   // '-ar 44100', 
    //   // '-ac 2'
    //   '-ar 22050',          // 设置采样率为 22.05kHz（标准为44.1kHz）
    //   '-ac 1'               // 设置为单声道（标准为双声道）
    // ])
    .output(output + ".mp3")   // 输出 MP3 文件
    .noVideo()                 // 仅输出音频
    .audioCodec('libmp3lame')  // 使用 LAME 编码生成 MP3
    .outputOptions([
      '-ar 22050',             // 设置采样率为 22.05kHz
      '-ac 1',                 // 设置为单声道
      '-b:a 192k'              // 设置比特率为 192kbps
    ])
    //音频/////////////////////////////////////////////////////////

    .on('start', (...args) => {
      log('record live start', args.join(' '))
      _resolve({
        code: SUCCESS_CODE
      })
    })
    .on('progress', (progress) => {
      setRecordStreamFfmpegProgressInfo(title, progress)
      log('record live progress: ', progress)
      // {"frames":2954,"currentFps":25,"currentKbps":null,"targetSize":null,"timemark":"00:01:58.27"}
    })
    .on('end', async (...args) => {
      const msg = args.join(' ')

      log('record live end: ', msg)

      killRecordStreamFfmpegProcess(title)

      cb?.(SUCCESS_CODE)
      await convert(convertSource, convertToMP4)
      cb?.(SUCCESS_CODE)
    })

    .on('stderr', function(stderrLine) {
      console.log('Stderr output: ' + stderrLine);

      // const output = data.toString();
      // console.log(output);  // 打印日志

      // if (output.includes('segment:')) {
      //     console.log('Segment completed event triggered.');
      // }

      // if (output.includes('frame=')) {
      //     console.log('Processing frame event.');
      // }
    })
    .on('codecData', function(data) {
      console.log('Input is ' + data.audio + ' audio ' +
        'with ' + data.video + ' video');
    })

    .on('filenames', function(filenames) {
      console.log('Will generate ' + filenames.join(', '))
    })

    .on('error', async (error) => {
      const errMsg = error.message
      log('record live error: ', errMsg)

      const isResolutionChange = resolutionChangeSet.has(title)
      // 清空数据
      killRecordStreamFfmpegProcess(title)

      let errCode!: number

      if (isResolutionChange) {
        errCode = FFMPEG_ERROR_CODE.RESOLUTION_CHANGE
      } else if (errMsg !== KILL_MESSAGE) {
        errCode = UNKNOWN_CODE
        if (errMsg.includes('Error opening input files: Operation timed out')) {
          errCode = FFMPEG_ERROR_CODE.TIME_OUT
        }
      } else {
        errCode = FFMPEG_ERROR_CODE.USER_KILL_PROCESS
      }

      cb?.(errCode, errMsg)
      await convert(convertSource, convertToMP4)
      cb?.(errCode, errMsg)
    })
    // .save(output + FLV_FLAG)
    // .save(output + ".mp4")
    .run();

    log('ffmpegProcess',ffmpegProcess)
  return p
}



export const recAudio = ()=>{
  const axios = require('axios');
  const fs = require('fs');
  const FormData = require('form-data');

  // 请求地址
  const url = "http://192.168.0.106:11300/jobs";

  // 创建 FormData 实例
  const formData = new FormData();
  formData.append('file', fs.createReadStream('./7411614111169022752-2024.09.07-12.20.47.wav')); // 添加文件
  formData.append('lang', 'en'); // 设置语言代码
  formData.append('model', 'large-v3'); // 设置模型
  // formData.append('response_format', 'json'); // 设置返回格式       

  // 发送 POST 请求
  axios.post(url, formData, {
      headers: {
          ...formData.getHeaders(), // 自动生成 multipart/form-data headers  
          // "Authorization":`Bearer ${}`
      },
      timeout: 600000 // 设置超时（600秒）
  })
  .then(response => {
      console.log(response.data); // 打印返回的 JSON 数据
  })
  .catch(error => {
      console.error(error); // 捕获并打印错误
  });



}


// export const recAudio = ()=>{
//   const axios = require('axios');
//   const fs = require('fs');
//   const FormData = require('form-data');

//   // 请求地址
//   const url = "http://192.168.0.106:9977/api";

//   // 创建 FormData 实例
//   const formData = new FormData();
//   formData.append('file', fs.createReadStream('./7411614111169022752-2024.09.07-12.20.47.wav')); // 添加文件
//   formData.append('language', 'my'); // 设置语言代码
//   formData.append('model', 'base'); // 设置模型
//   formData.append('response_format', 'json'); // 设置返回格式

//   // 发送 POST 请求
//   axios.post(url, formData, {
//       headers: {
//           ...formData.getHeaders() // 自动生成 multipart/form-data headers
//       },
//       timeout: 600000 // 设置超时（600秒）
//   })
//   .then(response => {
//       console.log(response.data); // 打印返回的 JSON 数据
//   })
//   .catch(error => {
//       console.error(error); // 捕获并打印错误
//   });



// }

