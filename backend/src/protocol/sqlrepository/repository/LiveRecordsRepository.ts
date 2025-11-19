import { LiveRecordsEntity } from "../entity/liverecords.entitysqlite"
import { EntityRepository, getConnection, In, Repository } from "typeorm";


@EntityRepository(LiveRecordsEntity)
export class SqliteLiveRecordsRepository extends Repository<LiveRecordsEntity> {

    // constructor(private dataSource: DataSource) {
    //     super(LiveRecordsEntity, dataSource.createEntityManager());
    // }

    /**
     * 获取账号列表 table
     * @param team_id 
     * @param pageNum 
     * @param pageSize 
     * @param type 
     * @param keyword 
     * 
     */
     async getPageList(pageNum: number, liveowner?: string, room_id?: string, pageSize?: number,groups?:string[],types?:any[]) {
        pageSize = pageSize || 200;
        // let repository = new LiveRecordsRepository()
        let queryBuilder = this.createQueryBuilder('liverecords');
        if (liveowner) queryBuilder = await queryBuilder.andWhere(`liverecords.liveowner = :liveowner`, { 'liveowner': liveowner });
        if (room_id) queryBuilder = await queryBuilder.andWhere(`liverecords.room_id = :room_id`, { 'room_id': room_id });
        if(groups&&groups.length) queryBuilder = await queryBuilder.andWhere(`liverecords.group in (:groups)`,{'groups':groups});
        if(types&&types.length) queryBuilder = await queryBuilder.andWhere(`liverecords.type in (:types)`,{'types':types});
        let result = await queryBuilder
            .skip((pageNum - 1) * pageSize)
            .take(pageSize)
            .orderBy({ created_at: "DESC" })
            .getManyAndCount();
        // console.log(result);
        return result;
    }

    //  async getPageList(room_id:string,pageNum:number,pageSize?:number,last_datetime?:any,keyword?:string,types?:string[]|string) {
    //     pageSize = pageSize || 200;
    //     // let repository = new LiveRecordsRepository()
    //     let queryBuilder = this.createQueryBuilder('liveRecords');
    //     // if(from_id) queryBuilder = await queryBuilder.where(`liveRecords.from_id = :from_id`, {'from_id':from_id});
    //     if(room_id) queryBuilder = await queryBuilder.where(`liveRecords.room_id = :room_id`, {'room_id':room_id});
    //     if(last_datetime) queryBuilder = await queryBuilder.where(`liveRecords.created_at < :last_datetime`, {'last_datetime':last_datetime});
    //     // //逻辑删除
    //     // queryBuilder = await queryBuilder.andWhere(`liveRecords.is_delete = :is_delete`, {'is_delete':0})
    //     if(keyword && keyword.length>0) queryBuilder = await queryBuilder.andWhere(`( liveRecords.content like :keyword or liveRecords.username like :keyword )`, {'keyword':'%'+keyword+'%'});
    //     if(types) queryBuilder = await queryBuilder.andWhere(`liveRecords.type in (:types)`, {'types':"string"==typeof types?[types]:types});

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
    //  async getPageListAndSender( team_id:string, pageNum:number,pageSize?:number,from_id?:string,room_id?:string,last_datetime?:any,keyword?:string) {
    //     pageSize = pageSize || 200;
    //     // let repository = new LiveRecordsRepository()
    //     let queryBuilder = this.createQueryBuilder('liveRecords');
    //     if(team_id!="*") queryBuilder = await queryBuilder.where(`liveRecords.team_id = :team_id`, {'team_id':team_id});
    //     if(from_id) queryBuilder = await queryBuilder.where(`liveRecords.from_id = :from_id`, {'from_id':from_id});
    //     if(room_id) queryBuilder = await queryBuilder.where(`liveRecords.room_id = :room_id`, {'room_id':room_id});
    //     if(last_datetime) queryBuilder = await queryBuilder.where(`liveRecords.created_at  :last_datetime`, {'last_datetime':last_datetime});
    //     // //逻辑删除
    //     queryBuilder = await queryBuilder.andWhere(`liveRecords.is_delete = :is_delete`, {'is_delete':0})
    //     if(keyword && keyword.length>0) queryBuilder = await queryBuilder.andWhere(`liveRecords.content like :keyword`, {'keyword':'%'+keyword+'%'});
        
    //     // if(type) queryBuilder = await queryBuilder.andWhere(`liveRecords.type = :type`, {'type':type});
    //     let result = await queryBuilder
    //         .skip((pageNum-1)*pageSize)
    //         .take(pageSize)
    //         // .orderBy({created_at:"DESC"})
    //         .leftJoinAndSelect("liveRecords.sender_id","sender_id")
    //         .getManyAndCount();
    //     return result;
    // }


    /**
     * 获取账号
     * @param ids 
     */
    async getById(ids:string | object ){
        let idss = typeof ids == "string" ? [ids] :ids;
        let list = await this.createQueryBuilder('liveRecords')
                .where("id in (:...id)", { id: idss  })
                .getMany();
        
        return typeof ids == "string" ? (list.length ? list.shift() : null) : list;
    }

    
    async createOrUpdate(fillData:any,liveRecords_id?:any) {
        

        let entityObj = "string"==typeof liveRecords_id ? await LiveRecordsEntity.findOne( liveRecords_id ) : liveRecords_id;//{where:{id:liveRecords_id}}
        // if( fillData&&fillData["uid"] ){ entityObj =  await LiveRecordsEntity.findOne({where:{uid:fillData["uid"]} });}
        if(!entityObj){ entityObj = await new LiveRecordsEntity();}

        for(let i in fillData){
            // if(["device_id","level","name","remark","state","type"].indexOf(i)>-1){
            //     entityObj[i] = data[i]
            // }
            entityObj[i] = fillData[i];
        }
        return await entityObj.save();
        
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
                        .from(LiveRecordsEntity)
                        .where("id in (:...id)", { id: ids  })
                        .execute();
    }

    // async getRepliedList(room_ids:Array<String>, pageNum:number,pageSize?:number,from_id?:string,last_datetime?:any,keyword?:string,isAutoReply?:number){
    //     pageSize = pageSize || 200;
    //     // let repository = new LiveRecordsRepository()
    //     let queryBuilder = this.createQueryBuilder('liveRecords');
    //     if(room_ids&&room_ids.length) queryBuilder = await queryBuilder.where(`liveRecords.room_id in (:cids)`, {'cids':room_ids});
    //     if(from_id) queryBuilder = await queryBuilder.andWhere(`liveRecords.from_id = :from_id`, {'from_id':from_id});
    //     if(last_datetime) queryBuilder = await queryBuilder.andWhere(`liveRecords.created_at  :last_datetime`, {'last_datetime':last_datetime});

    //     if(keyword && keyword.length>0) queryBuilder = await queryBuilder.andWhere(`liveRecords.content like :keyword`, {'keyword':'%'+keyword+'%'});
    //     if( "undefined" != typeof isAutoReply) queryBuilder = await queryBuilder.andWhere(`liveRecords.is_auto_reply = :isAutoReply`, {'isAutoReply':isAutoReply});
    //     let result = await queryBuilder
    //         .skip((pageNum-1)*pageSize)
    //         .take(pageSize)
    //         .orderBy({created_at:"DESC"})
    //         .getManyAndCount();
    //     return result;
    // }

    // async getLiveRecordsByIds(pageNum:number,pageSize?:number,ids?:any){
    //     pageSize = pageSize || 200;
    //     // let repository = new LiveRecordsRepository()
    //     let queryBuilder = this.createQueryBuilder('liveRecords');
    //     if(ids) queryBuilder = await queryBuilder.where("room_id",In(ids));
    //     await queryBuilder.where(`liveRecords.is_auto_reply = :isAutpReply`,{'isAutpReply':1});
    //     // if(type) queryBuilder = await queryBuilder.andWhere(`liveRecords.type = :type`, {'type':type});
    //     let result = await queryBuilder
    //         .skip((pageNum-1)*pageSize)
    //         .take(pageSize)
    //         .orderBy({created_at:"DESC"})
    //         .getManyAndCount();
    //     return result;
    // }

  }
  