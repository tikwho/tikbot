import {EntityRepository, Repository, getConnection ,In, getRepository} from "typeorm";
import * as moment from 'moment';
import { UserBlacklistEntity } from "./user_blacklist.entity";
// import { TaskProgressEntity } from "../task/task_progress.entity";
let iconv = require('iconv-lite');


@EntityRepository(UserBlacklistEntity)
export class UserBlacklistRepository extends Repository<UserBlacklistEntity> {

  
   /**
     * 获取账号列表 table
     * @param team_id 
     * @param pageNum 
     * @param pageSize 
     * @param type 
     * @param keyword 
     */
    async getPageList( team_id:string,pageNum:number,types?:string[],keyword?:string,pageSize?:number) {
        pageNum = pageNum || 1;
        pageSize = pageSize || 50;
        let queryBuilder = this.createQueryBuilder('user_blacklist');
        queryBuilder = await queryBuilder.where(`user_blacklist.state = 1`, {});
        if(team_id!="*") queryBuilder = await queryBuilder.andWhere(`user_blacklist.team_id = :team_id`, {'team_id':team_id});
        if(keyword && keyword.length>0) queryBuilder = await queryBuilder.andWhere(`( user_blacklist.name like :keyword or user_blacklist.uid  like :keyword or user_blacklist.sec_uid like :keyword or user_blacklist.remark like :keyword )`, {'keyword':'%'+keyword+'%'});
        if(types&&types.length) queryBuilder = await queryBuilder.andWhere(`user_blacklist.type in (:types)`, {types});
        // queryBuilder = queryBuilder.leftJoin(UserUserEntity, 'blackuser', 'user_blacklist.uid = blackuser.id').addSelect('ip', "raw");

        let result = await queryBuilder
                        // .offset((pageNum - 1) * pageSize)
                        // .limit( pageSize)
                        .skip((pageNum - 1) * pageSize)
                        .take( pageSize)
                        .getManyAndCount();
        return result;
    }

    
    async createOrUpdate(fillData:any,user_blacklist_id?:any) {
        
        let entityObj = "string"==typeof user_blacklist_id ? await UserBlacklistEntity.findOne( user_blacklist_id ) : user_blacklist_id;
        if( fillData&&fillData["uid"] ){ entityObj =  await UserBlacklistEntity.findOne({where:{uid:fillData["uid"],team_id:fillData["team_id"]} });}
        if(!entityObj){ entityObj = await new UserBlacklistEntity();}
        if(fillData["add_count"]){
            for(let i in fillData){
                if (i == "state" && entityObj["iswhite"]) {
                    entityObj[i] = 0;
                }
                else if (i == "remark") {
                    entityObj[i] = ((entityObj[i] || "") + "#" + fillData[i]).substr(-240);
                }
                else if (i == "add_count") {
                    entityObj["count"] = (entityObj["count"] || 0) + fillData[i];
                }
                else{
                    entityObj[i] = fillData[i];
                }
            }
        }
        else{
            for(let i in fillData){
                entityObj[i] = fillData[i];
            }
        }

        console.log(entityObj);
        return await entityObj.save();
        
    }
      
      /**
       * 删除
       * @param id 
       */
      async deleteByIds(id:String|Array<String>  ){
        let ids = "string" ==typeof id ? [id] : id;
            // return  await getConnection()
            //             .createQueryBuilder()
            //             .delete()
            //             .update({state:0})
            //             .from(UserBlacklistEntity)
            //             .where("id in (:id)", { id: ids  })
            //             .execute();

        return await getConnection()
            .createQueryBuilder()
            .update(UserBlacklistEntity) // 指定实体
            .set({ state: 0 }) // 设置要更新的字段及其值
            .where('id IN (:...ids)', { ids }) // 使用 IN 子句指定满足条件的行
            .execute();
    }





}


















