import {EntityRepository, Repository, getConnection ,In} from "typeorm";
import * as moment from 'moment';
import { ProtocolEntity } from "./protocol.entity";
import { Utils } from "src/common/utils";
let iconv = require('iconv-lite');


@EntityRepository(ProtocolEntity)
export class EngineRepository extends Repository<ProtocolEntity> {

    /**
     * 获取账号列表 table
     * @param team_id 
     * @param pageNum 
     * @param pageSize 
     * @param type 
     * @param keyword 
     * 
     */
    async getPageList( team_id:string, pageNum:number,pageSize?:number,from_id?:string,conversation_id?:string,last_datetime?:any,keyword?:string) {
        pageSize = pageSize || 200;
        // let repository = new EngineRepository()
        let queryBuilder = this.createQueryBuilder('engine');
        if(team_id!="*") queryBuilder = await queryBuilder.where(`engine.team_id = :team_id`, {'team_id':team_id});
        if(from_id) queryBuilder = await queryBuilder.where(`engine.from_id = :from_id`, {'from_id':from_id});
        if(conversation_id) queryBuilder = await queryBuilder.where(`engine.conversation_id = :conversation_id`, {'conversation_id':conversation_id});
        if(last_datetime) queryBuilder = await queryBuilder.where(`engine.created_at  :last_datetime`, {'last_datetime':last_datetime});
        // //逻辑删除
        queryBuilder = await queryBuilder.andWhere(`engine.is_delete = :is_delete`, {'is_delete':0})
        if(keyword && keyword.length>0) queryBuilder = await queryBuilder.andWhere(`engine.content like :keyword`, {'keyword':'%'+keyword+'%'});
        
        // if(type) queryBuilder = await queryBuilder.andWhere(`engine.type = :type`, {'type':type});
        let result = await queryBuilder
            .skip((pageNum-1)*pageSize)
            .take(pageSize)
            .orderBy({created_at:"DESC"})
            .getManyAndCount();
        return result;
    }

    /**
     * 获取账号列表 table(关联发送者)
     * @param team_id 
     * @param pageNum 
     * @param pageSize 
     * @param type 
     * @param keyword 
     * 
     */
     async getPageListAndSender( team_id:string, pageNum:number,pageSize?:number,from_id?:string,conversation_id?:string,last_datetime?:any,keyword?:string) {
        pageSize = pageSize || 200;
        // let repository = new EngineRepository()
        let queryBuilder = this.createQueryBuilder('engine');
        if(team_id!="*") queryBuilder = await queryBuilder.where(`engine.team_id = :team_id`, {'team_id':team_id});
        if(from_id) queryBuilder = await queryBuilder.where(`engine.from_id = :from_id`, {'from_id':from_id});
        if(conversation_id) queryBuilder = await queryBuilder.where(`engine.conversation_id = :conversation_id`, {'conversation_id':conversation_id});
        if(last_datetime) queryBuilder = await queryBuilder.where(`engine.created_at  :last_datetime`, {'last_datetime':last_datetime});
        // //逻辑删除
        queryBuilder = await queryBuilder.andWhere(`engine.is_delete = :is_delete`, {'is_delete':0})
        if(keyword && keyword.length>0) queryBuilder = await queryBuilder.andWhere(`engine.content like :keyword`, {'keyword':'%'+keyword+'%'});
        
        // if(type) queryBuilder = await queryBuilder.andWhere(`engine.type = :type`, {'type':type});
        let result = await queryBuilder
            .skip((pageNum-1)*pageSize)
            .take(pageSize)
            // .orderBy({created_at:"DESC"})
            .leftJoinAndSelect("engine.sender_id","sender_id")
            .getManyAndCount();
        return result;
    }


    /**
     * 获取账号
     * @param ids 
     */
    async getById(ids:string | object ){
        let idss = typeof ids == "string" ? [ids] :ids;
        let list = await this.createQueryBuilder('engine')
                .where("id in (:id)", { id: idss  })
                .getMany();
        
        return typeof ids == "string" ? (list.length ? list.shift() : null) : list;
    }

    
    async createOrUpdate(fillData:any,engine_id?:any) {
        

        let entityObj = "string"==typeof engine_id ? await ProtocolEntity.findOne( engine_id ) : engine_id;
        if( fillData&&fillData["username"] ){ entityObj =  await ProtocolEntity.findOne({where:{username:fillData["username"]} });}
        if( fillData&&fillData["uid"] ){ entityObj =  await ProtocolEntity.findOne({where:{uid:fillData["uid"]} });}
        if(!entityObj){ entityObj = await new ProtocolEntity();}

        for(let i in fillData){
            // if(["device_id","level","name","remark","state","type"].indexOf(i)>-1){
            //     entityObj[i] = data[i]
            // }
            entityObj[i] = fillData[i];
        }
        return  await entityObj.save();
        
    }


      /**
       * 删除
       * @param id 
       */
      async deleteByIds(id:String|Array<String>  ){
        let ids = "string" ==typeof id ? [id] : id;
            return  await getConnection()
                        .createQueryBuilder()
                        .delete()
                        .from(ProtocolEntity)
                        .where("id in (:id)", { id: ids  })
                        .execute();
    }

    async getRepliedList(conversation_ids:Array<String>, pageNum:number,pageSize?:number,from_id?:string,last_datetime?:any,keyword?:string,isAutoReply?:number){
        pageSize = pageSize || 200;
        // let repository = new EngineRepository()
        let queryBuilder = this.createQueryBuilder('engine');
        if(conversation_ids&&conversation_ids.length) queryBuilder = await queryBuilder.where(`engine.conversation_id in (:cids)`, {'cids':conversation_ids});
        if(from_id) queryBuilder = await queryBuilder.andWhere(`engine.from_id = :from_id`, {'from_id':from_id});
        if(last_datetime) queryBuilder = await queryBuilder.andWhere(`engine.created_at  :last_datetime`, {'last_datetime':last_datetime});

        if(keyword && keyword.length>0) queryBuilder = await queryBuilder.andWhere(`engine.content like :keyword`, {'keyword':'%'+keyword+'%'});
        if( "undefined" != typeof isAutoReply) queryBuilder = await queryBuilder.andWhere(`engine.is_auto_reply = :isAutoReply`, {'isAutoReply':isAutoReply});
        let result = await queryBuilder
            .skip((pageNum-1)*pageSize)
            .take(pageSize)
            .orderBy({created_at:"DESC"})
            .getManyAndCount();
        return result;
    }

    async getEngineByIds(pageNum:number,pageSize?:number,ids?:any){
        pageSize = pageSize || 200;
        // let repository = new EngineRepository()
        let queryBuilder = this.createQueryBuilder('engine');
        if(ids) queryBuilder = await queryBuilder.where("conversation_id",In(ids));
        await queryBuilder.where(`engine.is_auto_reply = :isAutpReply`,{'isAutpReply':1});
        // if(type) queryBuilder = await queryBuilder.andWhere(`engine.type = :type`, {'type':type});
        let result = await queryBuilder
            .skip((pageNum-1)*pageSize)
            .take(pageSize)
            .orderBy({created_at:"DESC"})
            .getManyAndCount();
        return result;
    }
}
