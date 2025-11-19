import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProtocolEntity } from './protocol.entity';
import { ProtocolService } from './protocol.service';
import { ProtocolRepository } from './protocol.repository';
import { ProtocolController } from './protocol.controller';
import { ProtocolPController } from './protocol_p.controller';
import { CacheService } from 'src/common/utils_cache';
// import { ProtocolHookService } from './protocol_hook.service';
import { AutoReplyModule } from '../autoreply';
import { EngineRepository } from './engine.repository';
import { EngineController } from './engine.controller';
import { EngineTiktokController } from './engine_tiktok.controller';
import { EngineService } from './engine.service';
// import { ConversationEntity, ConversationRepository } from '../conversation';
// import { ProtocolUserEntity } from './user/protocol_user.entity';
// import { ProtocolUserRepository } from './user/protocol_user.repository';
// import { ProtocolUserController } from './user/protocol_user.controller';
// import { ProtocolUserPublicController } from './user/protocol_user_p.controller';
// import { ProtocolUserService } from './user/protocol_user.service';

// @Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProtocolEntity,
      ProtocolRepository,
      // ConversationEntity,
      // ConversationRepository,

      // // UserBlacklistEntity,
      // // UserBlacklistRepository,

      // ProtocolUserEntity,
      // ProtocolUserRepository
      EngineRepository,
    ]),
    AutoReplyModule,
  ],
  controllers:[
    ProtocolController,
    ProtocolPController,
    // UserBlacklistController,
    // ProtocolUserController,
    // ProtocolUserPublicController
    EngineController,
    EngineTiktokController,
  ],
  exports: [
    ProtocolService,
    CacheService,
    // ProtocolHookService,
    // UserBlacklistService,
    // ProtocolUserService,
  ],
  providers: [
    ProtocolService,
    CacheService,
    // ProtocolHookService,
    // UserBlacklistService,
    // ProtocolUserService,
    EngineService
  ],
})
export class ProtocolModule { }