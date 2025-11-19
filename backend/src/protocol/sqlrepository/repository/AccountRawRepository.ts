import { EntityRepository, getConnection, In, Repository } from "typeorm";
import { AccountRawEntity } from "../entity/account_raw.entitysqlite";


@EntityRepository(AccountRawEntity)
export class SqliteAccountRawRepository extends Repository<AccountRawEntity> {



    /**
     * 获取原始数据
     * @param id 
     * @returns 
     */
     async getRawById(id:string ){
        return await AccountRawEntity.findOne({ where: { "id": id } })
    }


    async createOrUpdate(fillData:any,message_id?:any) {

        if( fillData&&fillData["uid"] ){ message_id =  fillData["uid"];}
        let entityObj = "string"==typeof message_id ? await AccountRawEntity.findOne( message_id ) : message_id;//{where:{id:message_id}}
        // if( fillData&&fillData["uid"] ){ entityObj =  await AccountRawEntity.findOne({where:{uid:fillData["uid"]} });}
        if(!entityObj){ entityObj = await new AccountRawEntity();}

        for(let i in fillData){
            // if(["device_id","level","name","remark","state","type"].indexOf(i)>-1){
            //     entityObj[i] = data[i]
            // }
            entityObj[i] = fillData[i];
        }
        return await entityObj.save();
        
    }


    // /**
    //  * 获取账号列表 table
    //  * @param team_id 
    //  * @param pageNum 
    //  * @param pageSize 
    //  * @param type 
    //  * @param keyword 
    //  * 
    //  */
    //  async getPageList( team_id:string, pageNum:number,pageSize?:number,from_id?:string,conversation_id?:string,last_datetime?:any,keyword?:string) {
    //     pageSize = pageSize || 200;
    //     // let repository = new MessageRepository()
    //     let queryBuilder = this.createQueryBuilder('message');
    //     if(team_id!="*") queryBuilder = await queryBuilder.where(`message.team_id = :team_id`, {'team_id':team_id});
    //     if(from_id) queryBuilder = await queryBuilder.where(`message.from_id = :from_id`, {'from_id':from_id});
    //     if(conversation_id) queryBuilder = await queryBuilder.where(`message.conversation_id = :conversation_id`, {'conversation_id':conversation_id});
    //     if(last_datetime) queryBuilder = await queryBuilder.where(`message.created_at  :last_datetime`, {'last_datetime':last_datetime});
    //     // //逻辑删除
    //     queryBuilder = await queryBuilder.andWhere(`message.is_delete = :is_delete`, {'is_delete':0})
    //     if(keyword && keyword.length>0) queryBuilder = await queryBuilder.andWhere(`message.content like :keyword`, {'keyword':'%'+keyword+'%'});
        
    //     // if(type) queryBuilder = await queryBuilder.andWhere(`message.type = :type`, {'type':type});
    //     let result = await queryBuilder
    //         .skip((pageNum-1)*pageSize)
    //         .take(pageSize)
    //         .orderBy({created_at:"DESC"})
    //         .getManyAndCount();
    //     return result;
    // }

    // /**
    //  * 获取账号列表 table(关联发送者)
    //  * @param team_id 
    //  * @param pageNum 
    //  * @param pageSize 
    //  * @param type 
    //  * @param keyword 
    //  * 
    //  */
    //  async getPageListAndSender( team_id:string, pageNum:number,pageSize?:number,from_id?:string,conversation_id?:string,last_datetime?:any,keyword?:string) {
    //     pageSize = pageSize || 200;
    //     // let repository = new MessageRepository()
    //     let queryBuilder = this.createQueryBuilder('message');
    //     if(team_id!="*") queryBuilder = await queryBuilder.where(`message.team_id = :team_id`, {'team_id':team_id});
    //     if(from_id) queryBuilder = await queryBuilder.where(`message.from_id = :from_id`, {'from_id':from_id});
    //     if(conversation_id) queryBuilder = await queryBuilder.where(`message.conversation_id = :conversation_id`, {'conversation_id':conversation_id});
    //     if(last_datetime) queryBuilder = await queryBuilder.where(`message.created_at  :last_datetime`, {'last_datetime':last_datetime});
    //     // //逻辑删除
    //     queryBuilder = await queryBuilder.andWhere(`message.is_delete = :is_delete`, {'is_delete':0})
    //     if(keyword && keyword.length>0) queryBuilder = await queryBuilder.andWhere(`message.content like :keyword`, {'keyword':'%'+keyword+'%'});
        
    //     // if(type) queryBuilder = await queryBuilder.andWhere(`message.type = :type`, {'type':type});
    //     let result = await queryBuilder
    //         .skip((pageNum-1)*pageSize)
    //         .take(pageSize)
    //         // .orderBy({created_at:"DESC"})
    //         .leftJoinAndSelect("message.sender_id","sender_id")
    //         .getManyAndCount();
    //     return result;
    // }

    // /**
    //  * 获取账号
    //  * @param ids 
    //  */
    // async getById(ids:string | object ){
    //     let idss = typeof ids == "string" ? [ids] :ids;
    //     let list = await this.createQueryBuilder('message')
    //             .where("id in (:id)", { id: idss  })
    //             .getMany();
        
    //     return typeof ids == "string" ? (list.length ? list.shift() : null) : list;
    // }

    
    // async createOrUpdate(fillData:any,message_id?:any) {
        

    //     let entityObj = "string"==typeof message_id ? await AccountRawEntity.findOne( message_id ) : message_id;//{where:{id:message_id}}
    //     // if( fillData&&fillData["uid"] ){ entityObj =  await AccountRawEntity.findOne({where:{uid:fillData["uid"]} });}
    //     if(!entityObj){ entityObj = await new AccountRawEntity();}

    //     for(let i in fillData){
    //         // if(["device_id","level","name","remark","state","type"].indexOf(i)>-1){
    //         //     entityObj[i] = data[i]
    //         // }
    //         entityObj[i] = fillData[i];
    //     }
    //     return await entityObj.save();
        
    // }


    //   /**
    //    * 删除
    //    * @param id 
    //    */
    //   async deleteByIds(id:String|Array<String>  ){
    //     let ids = "string" ==typeof id ? [id] : id;
    //         return  await getConnection()
    //                     .createQueryBuilder()
    //                     .delete()
    //                     .from(AccountRawEntity)
    //                     .where("id in (:id)", { id: ids  })
    //                     .execute();
    // }

    // async getRepliedList(conversation_ids:Array<String>, pageNum:number,pageSize?:number,from_id?:string,last_datetime?:any,keyword?:string,isAutoReply?:number){
    //     pageSize = pageSize || 200;
    //     // let repository = new MessageRepository()
    //     let queryBuilder = this.createQueryBuilder('message');
    //     if(conversation_ids&&conversation_ids.length) queryBuilder = await queryBuilder.where(`message.conversation_id in (:cids)`, {'cids':conversation_ids});
    //     if(from_id) queryBuilder = await queryBuilder.andWhere(`message.from_id = :from_id`, {'from_id':from_id});
    //     if(last_datetime) queryBuilder = await queryBuilder.andWhere(`message.created_at  :last_datetime`, {'last_datetime':last_datetime});

    //     if(keyword && keyword.length>0) queryBuilder = await queryBuilder.andWhere(`message.content like :keyword`, {'keyword':'%'+keyword+'%'});
    //     if( "undefined" != typeof isAutoReply) queryBuilder = await queryBuilder.andWhere(`message.is_auto_reply = :isAutoReply`, {'isAutoReply':isAutoReply});
    //     let result = await queryBuilder
    //         .skip((pageNum-1)*pageSize)
    //         .take(pageSize)
    //         .orderBy({created_at:"DESC"})
    //         .getManyAndCount();
    //     return result;
    // }

    // async getMessageByIds(pageNum:number,pageSize?:number,ids?:any){
    //     pageSize = pageSize || 200;
    //     // let repository = new MessageRepository()
    //     let queryBuilder = this.createQueryBuilder('message');
    //     if(ids) queryBuilder = await queryBuilder.where("conversation_id",In(ids));
    //     await queryBuilder.where(`message.is_auto_reply = :isAutpReply`,{'isAutpReply':1});
    //     // if(type) queryBuilder = await queryBuilder.andWhere(`message.type = :type`, {'type':type});
    //     let result = await queryBuilder
    //         .skip((pageNum-1)*pageSize)
    //         .take(pageSize)
    //         .orderBy({created_at:"DESC"})
    //         .getManyAndCount();
    //     return result;
    // }

  }
  