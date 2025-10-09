import { IsString, IsEnum, IsOptional, IsArray, IsUUID } from 'class-validator';
import { Channel, Priority } from 'shared/types';

export class CreateConversationDto {
  @IsUUID()
  tenant_id: string;

  @IsUUID()
  team_id: string;

  @IsUUID()
  account_id: string;

  @IsEnum(Channel)
  channel: Channel;

  @IsString()
  user_id: string;

  @IsOptional()
  @IsString()
  video_id?: string;

  @IsOptional()
  @IsEnum(Priority)
  priority?: Priority;

  @IsOptional()
  @IsArray()
  tags?: string[];

  @IsOptional()
  meta?: Record<string, any>;
}

export class UpdateConversationDto {
  @IsOptional()
  @IsEnum(Priority)
  priority?: Priority;

  @IsOptional()
  @IsArray()
  tags?: string[];

  @IsOptional()
  @IsArray()
  follower_ids?: string[];

  @IsOptional()
  meta?: Record<string, any>;
}

export class ReplyDto {
  @IsString()
  text: string;

  @IsOptional()
  @IsArray()
  attachments?: any[];
}

export class TransferDto {
  @IsUUID()
  to_agent_id: string;

  @IsOptional()
  @IsString()
  reason?: string;
}

export class InternalNoteDto {
  @IsString()
  content: string;
}