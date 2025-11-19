import {Entity, BaseEntity,  PrimaryColumn,  CreateDateColumn ,UpdateDateColumn,Column, PrimaryGeneratedColumn,Generated, JoinColumn, ManyToMany, Index, OneToOne} from "typeorm";
import { jsonTransformer, timeDateTransformer } from "./entity-transformer";
/**
 * 会话消息管理账号
 */
@Entity({name:"cu_message", orderBy:{created_at:"DESC"}, synchronize:true})
export class MessageEntity extends BaseEntity{

    @PrimaryColumn({ length: 128 ,unique:true, comment:"消息id"})
    // @Generated('uuid')
    id: string;

    @Column({  nullable:true, comment:"所属会话id"})
    conversation_id: string;

    @Column({  default:"7" , comment:"消息类型:7文字"})
    type: number;

    @Column({  default:"0" , comment:"是否已自动回复:0未自动回复"})
    is_auto_reply: number;

    @Column({ nullable:true, comment:"自动回复id"})
    auto_reply_id: string;

    @Column({default:0, comment:"是否已读"})
    is_read: number;

    @Column({default:0, comment:"是否已删除"})
    is_delete: number;

    @Column({ length: 64 , nullable:true, comment:"发送者id"})
    sender_id: string;

    @Column({ length: 64 , nullable:true, comment:"当前账号"})
    from_id: string;

    @Column({ type:"text" , nullable:true , comment:"信息简称" })
    content: string;

    @Column({ type:"text" , nullable:true , comment:"信息翻译" })
    content_trans: string;

    @Column({ type:"text" , nullable:true , transformer:new jsonTransformer(), comment:"原始信息" })
    content_raw: string;

    @Column({ type:"bigint" , nullable:true , comment:"排序时间戳" })
    order_at: number;

    @Column({ type:"text" , nullable:true ,  transformer:new jsonTransformer(), comment:"扩展信息" })
    ext: string;

    @CreateDateColumn({transformer:new timeDateTransformer(), comment:"创建時間"})
    created_at: Date;

    @UpdateDateColumn({ transformer:new timeDateTransformer(),comment:"更新时间"})
    updated_at: Date;


    static typesDesc = {2:"图片",5:"图片",7:"文本",8:"分享视频",15:"贴纸",25:"个人名片",26:"链接卡片",33:"问题详情",74:"红包",1021:"直播",1034:"直播事件",1036:"搜索链接"};
    static getContent(data){
        data = data || this;
        let content_raw = data.content_raw||{};
        let title = null;
        if(content_raw.text) title = content_raw.text;
        //名片
        if(content_raw.name) title = content_raw.name;
        //视频
        if(content_raw.content_title) title = content_raw.content_title;
        //直播
        if(content_raw.room_owner_name) title = content_raw.room_owner_name;
        return (data.type==7?'':`[${(this.typesDesc[data.type]||"不支持消息")}]`) + (title || content_raw.title || content_raw.display_name||"");
    }



}

