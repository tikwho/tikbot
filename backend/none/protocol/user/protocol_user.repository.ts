import {EntityRepository, Repository, getConnection ,In, getRepository} from "typeorm";
import * as moment from 'moment';
import { ProtocolUserEntity } from "./protocol_user.entity";
import { Utils } from "src/common/utils";
// import { TaskProgressEntity } from "../task/task_progress.entity";
let iconv = require('iconv-lite');


@EntityRepository(ProtocolUserEntity)
export class ProtocolUserRepository extends Repository<ProtocolUserEntity> {

  
   /**
     * 获取账号列表 table
     * @param team_id 
     * @param pageNum 
     * @param pageSize 
     * @param type 
     * @param keyword 
     */
    async getPageList( team_id:string,pageNum:number,sort?:any,keyword?:string,pageSize?:number) {
        pageNum = pageNum || 1;
        pageSize = pageSize || 50;
        let queryBuilder = this.createQueryBuilder('protocol_user');
        // if(team_id!="*") queryBuilder = await queryBuilder.where(`protocol_user.team_id = :team_id`, {'team_id':team_id});
        if(keyword && keyword.length>0) queryBuilder = await queryBuilder.andWhere(`protocol_user.name like :keyword or protocol_user.raw like :keyword`, {'keyword':'%'+keyword+'%'});
        console.info(sort,sort.raw_len);
        if(sort.raw_len){
            queryBuilder = queryBuilder.addSelect("JSON_LENGTH(raw) AS raw_len").orderBy("raw_len",sort.raw_len.toUpperCase());
        }
        if(sort.raw_from_len){
            queryBuilder = queryBuilder.addSelect("JSON_LENGTH(raw_from) AS raw_from_len").orderBy("raw_from_len",sort.raw_from_len.toUpperCase());
        }
        // if(cids&&cids.length) queryBuilder = await queryBuilder.andWhere(`protocol_user.linkcard_id in (:cids)`, {'cids':cids});
        // queryBuilder = queryBuilder.leftJoin(ProtocolUserEntity, 'user', 'protocol_user.id = user.protocol_user_id').addSelect('count(user.id)', "user_count");

        let result = await queryBuilder
                        // .offset((pageNum - 1) * pageSize)
                        // .limit( pageSize)
                        .skip((pageNum - 1) * pageSize)
                        .take( pageSize)
                        .getManyAndCount();
        return result;
    }

    
    async createOrUpdate(fillData:any,protocol_user_id?:any) {
        
        if(fillData["id"]){protocol_user_id=fillData["id"];}
        let entityObj = "string"==typeof protocol_user_id ? await ProtocolUserEntity.findOne( protocol_user_id ) : protocol_user_id;
        if( fillData&&fillData["uid"] ){ entityObj =  await ProtocolUserEntity.findOne({where:{uid:fillData["uid"]} });}
        if(!entityObj){ entityObj = await new ProtocolUserEntity();}

        //100组访问记录
        // {fid:fillData.from_user_id,fr:fillData.from_event,fname:fillData.from_user_name}
        if(fillData.event){
            if(!entityObj["raw"]){entityObj["raw"]=[];}
            entityObj["raw"].push(Object.assign({time:await Utils.formatTime()},fillData.event));
            entityObj["raw"] = entityObj["raw"].slice(-100);

            if(!entityObj["raw_from"]){entityObj["raw_from"]={};}
            entityObj["raw_from"][fillData.event.fid] = (entityObj["raw_from"][fillData.event.fid]||0)+1;
        }
        
        for(let i in fillData){
            entityObj[i] = fillData[i];
        }

        return await entityObj.save();
        
    }
      
      /**
       * 删除
       * @param id 
       */
      async deleteByIds(id:String|Array<String> ,team_id?:string ){
        let ids = "string" ==typeof id ? [id] : id;
        let queryBuilder = await getConnection()
                            .createQueryBuilder()
                            .delete()
                            .from(ProtocolUserEntity)
                            .where("team_id = :team_id",{team_id});
        if(ids&&ids[0]!="all"){queryBuilder = queryBuilder.andWhere("id in (:id)", { id: ids  });}
        return  await queryBuilder.execute();
    }





}


















