import {EntityRepository, Repository, getConnection ,In} from "typeorm";
import * as moment from 'moment';
import { ProtocolEntity } from "./protocol.entity";
// import { ProtocolStatistics } from "./protocol-statistics.entity";
import { Utils } from "src/common/utils";
import { Timeout } from "@nestjs/schedule";
let iconv = require('iconv-lite');


@EntityRepository(ProtocolEntity)
export class ProtocolRepository extends Repository<ProtocolEntity> {

    /**
     * 获取账号列表 table
     * @param team_id 
     * @param pageNum 
     * @param pageSize 
     * @param type 
     * @param keyword 
     */
    async getPageList( owner_id:string, pageNum:number,pageSize?:number,type?:string[],keyword?:string, autologin?:any) {
        pageSize = pageSize || 200;
        let queryBuilder = this.createQueryBuilder('protocol');
        if(owner_id!="*") queryBuilder = await queryBuilder.where(`protocol.owner_id = :owner_id`, {'owner_id':owner_id});
        if(keyword && keyword.length>0) queryBuilder = await queryBuilder.andWhere(`(protocol.username like :keyword or protocol.nickname like :keyword)`, {'keyword':'%'+keyword+'%'});
        if(autologin){queryBuilder = await queryBuilder.andWhere(`protocol.autologin = :autologin`, {autologin}); }
        if(type) queryBuilder = await queryBuilder.andWhere(`protocol.type in (:...type)`, {'type':type});
        let result = await queryBuilder
            .skip((pageNum-1)*pageSize)
            .take(pageSize)
            .orderBy({created_at:"DESC"})
            .getManyAndCount();
        return result;
    }
    
    //获取会话
    async getListStaff(owner_id:string, selects?:string[],onlyColume?:string , types?:any, autologin?:any, pageNum?:number,pageSize?:number,keyword?:string){
        pageNum = pageNum||1;
        pageSize = pageSize || 50;
        let queryBuilder =  this.createQueryBuilder('protocol');
        if(owner_id!="*") queryBuilder = await queryBuilder.where(`protocol.owner_id = :owner_id`, {'owner_id':owner_id});
        if(types){ queryBuilder = await queryBuilder.andWhere(`protocol.type in (:...types)`, {'types': types });  }
        if(keyword && keyword.length>0) queryBuilder = await queryBuilder.andWhere(`(protocol.username like :keyword or protocol.uid like :keyword or protocol.nickname like :keyword)`, {'keyword':'%'+keyword+'%'});
        if(autologin){queryBuilder = await queryBuilder.andWhere(`protocol.autologin = :autologin`, {autologin}); }
        if(selects){ queryBuilder = queryBuilder.select(selects) }
        let conversations:any = await queryBuilder
                            .skip((pageNum-1)*pageSize)
                            .take(pageSize)
                            .orderBy({created_at:"DESC"})
                            .getMany();
        conversations.forEach((item)=>{item.imFrontier = item.getImFrontier();});
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
     * 获取分组
     * @param team_id 
     */
         async getCategory( team_id:string){
            let categorys = await this.createQueryBuilder()
                        .select("DISTINCT category")
                        .where("team_id=:team_id",{team_id})
                        .getRawMany();
            let list = [];
            for(let i in categorys){
                list.push(categorys[i].category);
            }
            return list;
        }

    /**
     * 获取账号
     * @param ids 
     */
    async getById(ids:string | object ){
        let idss = typeof ids == "string" ? [ids] :ids;
        let list = await this.createQueryBuilder('protocol')
                .where("id in (:...id) or page_id in (:...id)", { id: idss  })
                .getMany();
        
        return typeof ids == "string" ? (list.length ? list.shift() : null) : list;
    }

    
    async createOrUpdate(fillData:any,protocol_id?:any) {
        

        let entityObj = "string"==typeof protocol_id ? await ProtocolEntity.findOne( protocol_id ) : protocol_id;
        if( fillData&&fillData["uid"] ){ entityObj =  await ProtocolEntity.findOne({where:{uid:fillData["uid"]} });}
        if(!entityObj){ entityObj = await new ProtocolEntity();}

        // if( fillData.daily){
        //     let statistics = await this.updateStatistics(  Object.assign( {protocol_id: fillData.id } , fillData.daily  ) );
        //     fillData = Object.assign( fillData , fillData.daily  );//引用统计数据更新相关数据
        // }//更新数据统计

        //存入cookies
        if(fillData["cookies"]){
            let cookiesObj = fillData["cookies"];
            let cookies = [];
            for(let i in cookiesObj){
                let itemck = cookiesObj[i];
                cookies.push(itemck.name+"="+itemck.value);
            }
            fillData.cookies_str = cookies.join(";");
        }

        for(let i in fillData){
            // if(["device_id","level","name","remark","state","type"].indexOf(i)>-1){
            //     entityObj[i] = data[i]
            // }
            entityObj[i] = fillData[i];
        }
        return await entityObj.save();
        
    }


    // /**
    //  * 更新统计数据
    //  * @param statisticsData 
    //  */
    // async updateStatistics( statisticsData:any ) : Promise< ProtocolStatistics >{

    //     let objId = statisticsData["protocol_id"] as string;
    //     statisticsData.id = Utils.StatisticsId( objId );
  
    //     let entityLast = await ProtocolStatistics.findOne( statisticsData.id );//{where:{ "protocol_id" : objId } , order:{updated_at:"DESC"} }
    //     let entity = !entityLast || entityLast.id != statisticsData.id ? new ProtocolStatistics() : entityLast;
  
    //     Object.keys( statisticsData ).forEach((key) => {
    //       if(statisticsData[key]==null || statisticsData[key]==""){return;}
    //       entity[key] =  (entityLast && entityLast[key] && statisticsData[key]==0) ? entityLast[key] : statisticsData[key];
    //     });
    //     return await ProtocolStatistics.save(entity);
    //   }



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
                        .where("id in (:...id)", { id: ids  })
                        .execute();
    }



    //     @Timeout(1000)
    // // @Interval(3000)
    // async syncDatabase(){
    //     // let list = await this.find({where:{synced:0},take:50000});
    //     let list = await this.find({take:50000});
    //     console.info(list.length,"listnewDataBase------");
    //     const newDataBase = getConnection("postgres").getRepository(ProtocolEntity);
    //     for(let item of list){ 
    //         // item.synced=1;item.save();
    //         newDataBase.save(item);
    //         // console.info(item,"newItem");
    //     }
    // }

}
