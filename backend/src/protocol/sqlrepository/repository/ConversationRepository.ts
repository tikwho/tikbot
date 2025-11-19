import { ConversationEntity } from "../entity/conversation.entitysqlite"
import { EntityRepository, getConnection, In, Repository } from "typeorm";
import { AccountRawEntity } from "../entity/account_raw.entitysqlite";


@EntityRepository(ConversationEntity)
export class SqliteConversationRepository extends Repository<ConversationEntity> {

    /**
     * 获取账号列表 table
     * @param team_id 
     * @param pageNum 
     * @param pageSize 
     * @param type 
     * @param keyword 
     */
     async getPageList( owner_id:string, pageNum:number,pageSize?:number,type?:string,keyword?:string,from_ids?:string[],is_delete?:number) {
        pageSize = pageSize || 200;
        // let repository = new ConversationRepository()
        let queryBuilder = this.createQueryBuilder('conversation');
        if(owner_id!="*")queryBuilder = queryBuilder.where(`conversation.owner_id = :owner_id`, {'owner_id':owner_id});
        if(!is_delete){queryBuilder = await queryBuilder.andWhere(`conversation.is_delete = 0`);}
        // console.info("SqliteConversationRepository1111111");
        if(keyword && keyword.length>0) queryBuilder = await queryBuilder.andWhere(`conversation.chatname like :keyword`, {'keyword':'%'+keyword+'%'});
        if(type) queryBuilder = await queryBuilder.andWhere(`conversation.type = :type`, {'type':type});
        // console.info(typeof from_ids,from_ids,from_ids.length,JSON.stringify(from_ids));
        
        // console.info("SqliteConversationRepository2222222");
        if(from_ids){queryBuilder = await queryBuilder.andWhere(`( conversation.from_id IN (:...from_ids) )`, {'from_ids':from_ids });}//&&from_ids.length

        queryBuilder =  queryBuilder.leftJoin(AccountRawEntity, "account", "account.id = conversation.participant_id")
                                .addSelect("account.raw", "account_raw")
        let result = await queryBuilder
                            .skip((pageNum-1)*pageSize)
                            .take(pageSize)
                            .orderBy({'conversation.active_at':"DESC"})
                            .getRawAndEntities();
        result.entities.forEach((item,index)=>{
            let account_raw = JSON.parse(result.raw[index].account_raw);
            if(!item.chatname){item.chatname = account_raw?.unique_id;}
            item.avatar = account_raw?.avatar_medium;
        });
        return [result.entities,await queryBuilder.getCount()];
    }

    //获取会话
    async getConversations(owner_id:string, selects?:string[],onlyColume?:string ){
        let queryBuilder =  this.createQueryBuilder('conversation');
        if(selects){ queryBuilder = queryBuilder.select(selects) }
        let conversations:any = await queryBuilder
                            // .select(["id"])
                            .where({"owner_id":owner_id})
                            .getMany();
        if( onlyColume ){
            let conversationsOnlyColume = [];
            conversations.forEach((item)=>{
                conversationsOnlyColume.push(item[onlyColume]);
            });
            return conversationsOnlyColume;
        }
        return conversations;
    }

    /**
     * 获取账号
     * @param ids 
     */
    async getById(ids:string | object ){
        let idss = typeof ids == "string" ? [ids] :ids;
        let list = await this.createQueryBuilder('conversation')
                .where("id in (:id)", { id: idss  })
                .getMany();
        
        return typeof ids == "string" ? (list.length ? list.shift() : null) : list;
    }

    
    async createOrUpdate(fillData:any,conversation_id?:any,nullfill?:any) {
        if(!conversation_id && fillData.id){conversation_id=fillData.id;}
        if("string" == typeof conversation_id){conversation_id= conversation_id.replace(/[A-Za-z]/ig,"");}
        let entityObj = "string" == typeof conversation_id
                        ? await ConversationEntity.findOne( {where:"string" == typeof conversation_id ?{id:conversation_id}:conversation_id})
                        : conversation_id;
        // 统一会话ID为前由本账号+参与账号
        // if(!entityObj && "string" == typeof conversation_id ){
        //     let newconversation_id = conversation_id.replace(`:${fillData.participant_id}`,"")+`:${fillData.participant_id}`; //重新调转顺序
        //     if(conversation_id!=newconversation_id){
        //         entityObj = await ConversationEntity.findOne( {where:{id:conversation_id}});
        //     }
        // }           
        // if( fillData&&fillData["uid"] ){ entityObj =  await ConversationEntity.findOne({where:{uid:fillData["uid"]} });}
        if(!entityObj){ entityObj = await new ConversationEntity();}

        let needSubmit = false;
        for(let i in fillData){
            if(["chatname","avatar"].indexOf(i)>-1 && !fillData[i]){
                continue;
            }
            //为空才更新的
            if(nullfill&&nullfill.indexOf(i)>0 && entityObj[i]){
                continue;
             }
            //  未读更新
             if(i=="unread" ){
                entityObj[i]+=fillData[i];
                if(fillData[i]==0||entityObj[i]<0){entityObj[i]=0;}
                needSubmit = true;
             }
             if(entityObj[i]!=fillData[i]){console.info(i,"needSubmit---------");needSubmit = true;}
            entityObj[i] = fillData[i];
            
        }
        if(needSubmit){ entityObj = await entityObj.save(); }
        return entityObj;

    }

    // /**
    //  * 批量更新
    //  * @param id 
    //  */
    //     async updateByIds(where:any,data:any  ){
    //         return  await getConnection()
    //                     .createQueryBuilder()
    //                     .from(ConversationEntity)
    //                     .update(data)
    //                     .where({})
    //                     .execute();
    // }


      /**
       * 删除
       * @param id 
       */
      async deleteByIds(id:String|Array<String>  ){
        let ids = "string" ==typeof id ? [id] : id;
            return  await getConnection()
                        .createQueryBuilder()
                        .delete()
                        .from(ConversationEntity)
                        .where("id in (:...id) or from_id in (:...id)", { id: ids  })
                        .execute();
    }

  }
  