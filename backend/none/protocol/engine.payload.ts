import { ApiProperty } from '@nestjs/swagger';
import { IsMobilePhone, IsNotEmpty, MinLength } from 'class-validator';


export class createPayload {

  @ApiProperty({required: true,description: '账号name/whatsapp传手机号' })
  username: string;

  @ApiProperty({required: false,description: '代理ip' })
  proxy_ip: string;

  // @ApiProperty({required: false,description: '类型 whatsapp/tiktok' })
  // type: string;

}

export class editPayload {

  @ApiProperty({required: true,description: 'bot id' })
  id: string;

  @ApiProperty({required: false,description: '代理ip' })
  proxy_ip: string;

  @ApiProperty({required: false,description: 'bot相关' })
  raw_data: object;

  // @ApiProperty({required: false,description: '通知地址' })
  // notice_url: string;

}

export class messagePayload {

  @ApiProperty({required: true,description: 'bot id' })
  id: string;

  @ApiProperty({required: true,description: '发送目标' })
  to: string;

  @ApiProperty({required: false,description: '消息id，如果没有则会自动生成' })
  msg_id: string;

  @ApiProperty({required: true,description: '消息对象' })
  content: any;

  @ApiProperty({required: true,description: '消息对象' })
  ext: any;

}

export class deletePayload {

  @ApiProperty({required: true,description: 'bot id' })
  id: string;

}


// export class EngineRecordsPayload {

//   @ApiProperty({required: false,description: '最小消息记录' })
//   min_record_id: string;

//   @ApiProperty({required: false,description: '最小消息时间' })
//   last_datetime: string;

//   @ApiProperty({required: false,description: '参与者' })
//   conversation_id: string;

//   @ApiProperty({required: false,description: '所属用户' })
//   from_id: string;

//   @ApiProperty({required: false,description: '页数' })
//   current: number;

//   @ApiProperty({required: false,description: '单页大小' })
//   size: number;

//   @ApiProperty({required: false,description: '搜索词' })
//   keyword: string;

//   @ApiProperty({required: false,description: '是否已自动回复' })
//   isAutoReply: number;

// }


export class EngineIndexPayload {

  @ApiProperty({required: false,description: '团队' })
  owner_id: string;

  @ApiProperty({required: false,description: '页数' })
  current: number;

  @ApiProperty({required: false,description: '单页大小' })
  size: number;

  @ApiProperty({required: false,description: '类型' })
  type: string;

  @ApiProperty({required: false,description: '关键词' })
  keyword: string;

}