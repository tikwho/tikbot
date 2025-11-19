import {Entity, BaseEntity,  PrimaryColumn,  CreateDateColumn ,UpdateDateColumn,Column, PrimaryGeneratedColumn,Generated, JoinColumn, ManyToMany, Index, OneToOne} from "typeorm";
import { OneToMany,ManyToOne,JoinTable} from "typeorm";
import { Inject, forwardRef } from "@nestjs/common";
import { timeDateTransformer } from "../../common/entity-transformer";
import { Utils } from "src/common/utils";

/**
 * 授权页面账号
 */
@Entity({name:"cu_protocol",synchronize: false})
export class ProtocolEntity extends BaseEntity{
    
    @PrimaryColumn()
    // @Generated('uuid')
    id: string;

    @Column({ length: 256 , nullable:true , comment:"账号ID"  })
    @Index()
    uid: string;

    @Column({ length: 256 , nullable:true , comment:"sec账号ID"  })
    @Index()
    sec_uid: string;

    @Column({length: 128 , nullable:true, comment:"名称" })
    username: string;

    @Column({length: 128 , nullable:true, comment:"密码" })
    password: string;

    @Column({default:1, comment:"状态"})
    state: number;

    @Column({  default:"douyin" , comment:"类型"})
    type: string;

    @Column({default:1, comment:"登陆类型"})
    login_type: number;

    @Column({default:0, comment:"自动登录"})
    autologin: number;

    @Column({ type:"json" , nullable:true , comment:"登录详情" })
    autologin_types: object;

    @Column({ length: 64 , default:"默认" , comment:"分类" })
    category: string;

    @Column({ type:"text" , nullable:true, comment:"代理ip"})
    proxy_ip: string
    
    @Column({ type:"text" , nullable:true, comment:"通知地址"})
    notice_url: string;
  
    @Column({ type:"text" , nullable:true, comment:"语言"})
    lang: object

    @Column({ type:"text", nullable:true, comment:"页面cookies字符"})
    cookies_str: string

    @Column({type:"json",nullable:true, comment:"页面cookies"})
    cookies: object
  
    @Column({type:"json",nullable:true, comment:"页面头部"})
    headers: object

    @Column({ type:"text" , nullable:true, comment:"头像"})
    avatar:string;

    @Column({ length: 128 , nullable:true, comment:"昵称"})
    nickname:string;

    @Column({ type:"json" , nullable:true , comment:"账号详细" })
    raw: object;

    @Column({ type:"json" , nullable:true , comment:"日常数据" })
    daily: object;

    @Column({type:"json",nullable:true, comment:"页面相关"})
    raw_data: any

    @Column({  length: 64 , nullable:true, comment:"模拟授权id"})
    did: string;

    @Column({ length: 36 , nullable:true, comment:"网页授权页面ID" })
    page_id: string;

    @Column({nullable:true})
    remark: string;

    @CreateDateColumn({transformer:new timeDateTransformer()})
    created_at: Date;

    @UpdateDateColumn({transformer:new timeDateTransformer()})
    updated_at: Date;

    @Column({ length: 36 , nullable:true})
    team_id: string;

    @Column({ length: 36 , comment:"所属人员ID" })
    owner_id: string;

    getImFrontier (){
        // return "wss://frontier.tiktokv.com/ws/v2";
        let imFrontier = 'wss://im-ws.tiktok.com/ws/v2';
        let cookiestr = this.cookies_str || "";

        // let country_code = (this.raw as any)?.country_code||0;
        // if ([673, 855, 670, 62, 81, 856, 60, 95, 63, 65, 82, 66, 84, 86].indexOf(country_code) > -1) {
        //     imFrontier = 'wss://im-ws-sg.tiktok.com/ws/v2';
        // }
        // else if ([1,52,44].indexOf(country_code) > -1) {
        //     imFrontier = 'wss://frontier.us.tiktokv.com/ws/v2';
        // }
        // return imFrontier;
        if ( cookiestr.match(/store-country-code=sg/) ) {
            imFrontier = 'wss://im-ws-sg.tiktok.com/ws/v2';
        }
        // else if ( cookiestr.match(/store-country-code=us/) ) {
        //     imFrontier = 'wss://frontier.us.tiktokv.com/ws/v2';
        // }
        return imFrontier;
    }
    
    // @Inject(forwardRef(() => DeviceEntity))
    // @ManyToOne(type => DeviceEntity, deviceEntity =>  deviceEntity.protocols )
    // device: DeviceEntity;

    async req(url:string,postData?:any,type?:string,requestData?:any){
        let access_token = (this.raw as any)?.access_token;//this.cacheService.get("");
        if(!access_token){throw Error("access_token is null");}
        type = type || "POST";
        let headers = {"access-token":access_token};
        let result = await Utils.req(url,requestData,type,Object.assign({},{access_token},postData),true,headers) as any;
        console.info(result);
        return result;
    }

}
