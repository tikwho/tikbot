import * as querystring from 'querystring';
import * as http from 'http';
import moment = require('moment');
import { Injectable, ForbiddenException } from '@nestjs/common';
import { LoggerService } from 'src/logger/logger.service';
import { UserBlacklistRepository } from './user_blacklist.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { UserBlacklistEntity } from './user_blacklist.entity';
import { Utils } from 'src/common/utils';

@Injectable()
export class UserBlacklistService {

  constructor( 
    private readonly logger: LoggerService ,
    public readonly repository:UserBlacklistRepository,
  ){ }
  



}
