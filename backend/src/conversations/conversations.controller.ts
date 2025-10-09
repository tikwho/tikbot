import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  Query,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ConversationsService } from './conversations.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateConversationDto, UpdateConversationDto, ReplyDto, TransferDto, InternalNoteDto } from './dto';

@Controller('conversations')
@UseGuards(JwtAuthGuard)
export class ConversationsController {
  constructor(private conversationsService: ConversationsService) {}

  @Post()
  async create(@Body() createDto: CreateConversationDto) {
    return await this.conversationsService.create(createDto);
  }

  @Get('inbox')
  async getInbox(@Request() req, @Query() filter: any) {
    const agentId = req.user.agentId; // 从 JWT 中获取
    return await this.conversationsService.findByInbox(agentId, filter);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.conversationsService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateDto: UpdateConversationDto) {
    // TODO: 实现更新逻辑
    return { message: 'Update not implemented yet' };
  }

  @Post(':id/reply')
  async reply(
    @Param('id') conversationId: string,
    @Request() req,
    @Body() replyDto: ReplyDto,
  ) {
    const agentId = req.user.agentId;
    return await this.conversationsService.reply(conversationId, agentId, replyDto);
  }

  @Post(':id/claim')
  async claim(@Param('id') conversationId: string, @Request() req) {
    const agentId = req.user.agentId;
    return await this.conversationsService.claim(conversationId, agentId);
  }

  @Post(':id/transfer')
  async transfer(
    @Param('id') conversationId: string,
    @Request() req,
    @Body() transferDto: TransferDto,
  ) {
    const agentId = req.user.agentId;
    return await this.conversationsService.transfer(
      conversationId,
      agentId,
      transferDto.to_agent_id,
    );
  }

  @Post(':id/resolve')
  async resolve(@Param('id') conversationId: string, @Request() req) {
    const agentId = req.user.agentId;
    return await this.conversationsService.resolve(conversationId, agentId);
  }

  @Post(':id/notes')
  async addNote(
    @Param('id') conversationId: string,
    @Request() req,
    @Body() noteDto: InternalNoteDto,
  ) {
    const agentId = req.user.agentId;
    return await this.conversationsService.addInternalNote(
      conversationId,
      agentId,
      noteDto.content,
    );
  }
}