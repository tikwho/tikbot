import { AutoreplyRecordEntity } from "../entity/autoreply_record.entitysqlite"
import { EntityRepository, getConnection, In, Repository } from "typeorm";


@EntityRepository(AutoreplyRecordEntity)
export class SqliteAutoreplyRecordRepository extends Repository<AutoreplyRecordEntity> {

    // constructor(private dataSource: DataSource) {
    //     super(AutoreplyRecordEntity, dataSource.createEntityManager());
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
     async getPageList( team_id:string, pageNum:number,pageSize?:number,from_id?:string|string[],keyword?:string,last_datetime?:any,types?:string[]|string) {
        pageSize = pageSize || 200;
        // let repository = new AutoreplyRecordRepository()
        let queryBuilder = this.createQueryBuilder('record');
        if(team_id!="*") queryBuilder = await queryBuilder.where(`record.team_id = :team_id`, {'team_id':team_id});
        if(from_id) queryBuilder = await queryBuilder.where(`record.from_id in (:...from_id)`, {'from_id':"string"==typeof from_id?[from_id]:from_id });
        // if(conversation_id) queryBuilder = await queryBuilder.where(`record.conversation_id = :conversation_id`, {'conversation_id':conversation_id});
        if(last_datetime) queryBuilder = await queryBuilder.where(`record.created_at < :last_datetime`, {'last_datetime':last_datetime});
        // //逻辑删除
        queryBuilder = await queryBuilder.andWhere(`record.is_delete = :is_delete`, {'is_delete':0})
        if(keyword && keyword.length>0) queryBuilder = await queryBuilder.andWhere(`( record.content like :keyword or record.content_hand like :keyword )`, {'keyword':'%'+keyword+'%'});
        console.info(typeof types,'"string"==typeof types?[types]:types');
        if(types) queryBuilder = await queryBuilder.andWhere(`record.type in (:...types)`, {'types':"string"==typeof types?[types]:types});

        let result = await queryBuilder
            .skip((pageNum-1)*pageSize)
            .take(pageSize)
            .orderBy({created_at:"DESC"})
            .getManyAndCount();
        return result;
    }


    /**
     * 获取账号
     * @param ids 
     */
    async getById(ids:string | object ){
        let idss = typeof ids == "string" ? [ids] :ids;
        let list = await this.createQueryBuilder('record')
                .where("id in (:id)", { id: idss  })
                .getMany();
        
        return typeof ids == "string" ? (list.length ? list.shift() : null) : list;
    }

    
    async createOrUpdate(fillData:any,record_id?:any) {
        

        let entityObj = "string"==typeof record_id ? await AutoreplyRecordEntity.findOne( record_id ) : record_id;//{where:{id:record_id}}
        // if( fillData&&fillData["uid"] ){ entityObj =  await AutoreplyRecordEntity.findOne({where:{uid:fillData["uid"]} });}
        if(!entityObj){ entityObj = await new AutoreplyRecordEntity();}

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
                        .from(AutoreplyRecordEntity)
                        .where("id in (:...id)", { id: ids  })
                        .execute();
    }

    async deleteByTypes(id:String|Array<String>  ){
        let ids = "string" ==typeof id ? [id] : id;
            return  await getConnection()
                        .createQueryBuilder()
                        .delete()
                        .from(AutoreplyRecordEntity)
                        .where("type in (:...id)", { id: ids  })
                        .execute();
    }





  }
  