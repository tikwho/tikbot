import { ApiProperty } from '@nestjs/swagger';
import { IsMobilePhone, IsNotEmpty, MinLength } from 'class-validator';

export class ProtocolInfoPayload {

  @ApiProperty({required: false,description: '账号ID:与pid二选一' })
  id: string;

  @ApiProperty({required: false,description: '页面ID:与aid二选一' })
  pid: string;

}


export class ProtocolIndexPayload {

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

  @ApiProperty({required: false,description: '自動登錄' })
  autologin:number;

}

export class ProtocolLogInfoPayload {

  @ApiProperty({required: false,description: '团队' })
  transfer_id: string;

  @ApiProperty({required: false,description: '页数' })
  receiver_id: string;

  @ApiProperty({required: false,description: '页数' })
  protocol_id: string;

  @ApiProperty({required: false,description: '类型' })
  type: string;

}