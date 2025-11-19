import {Entity, BaseEntity,  PrimaryColumn,  CreateDateColumn ,UpdateDateColumn,Column, PrimaryGeneratedColumn,Generated, JoinColumn, ManyToMany, Index, OneToOne} from "typeorm";
import { jsonTransformer, timeDateTransformer } from "./entity-transformer";

/**
 * 会话管理账号
 */
@Entity({name:"cu_conversation", orderBy:{is_top:"DESC",active_at:"DESC",updated_at:"DESC"}, synchronize:true})
export class ConversationEntity extends BaseEntity{

    @PrimaryColumn()
    // @Generated('uuid')
    id: string;

    @Column({  nullable:true, comment:"会话短id"})
    shortid: string;

    @Column({default:1, comment:"状态"})
    state: number;

    @Column({default:0, comment:"未读消息"})
    unread: number;

    @Column({  default:"1" , comment:"聊天类型:1单聊 2群聊"})
    type: string;

    @Column({   nullable:true, comment:"会话语言"})
    lang: string;

    @Column({ type:"text" , nullable:true, comment:"聊天头像"})
    avatar:string;

    @Column({ type:"text" , nullable:true, comment:"内容"})
    msg_text:string;

    @Column({nullable:true, comment:"聊天名称：群聊名称" })
    chatname: string;

    @Column({nullable:true, comment:"备注" })
    remark: string;

    @Column({default:0, comment:"是否置顶"})
    is_top: number;

    @Column({default:0, comment:"是否已删除"})
    is_delete: number;

    @Column({default:0, comment:"是否静音"})
    is_mute: number;

    @Column({default:0, comment:"是否拉黑"})
    is_block: number;

    @Column({ length: 36 , nullable:true, comment:"成员账号"})
    participant_id: string;

    @Column({ length: 36 , nullable:true, comment:"当前账号"})
    from_id: string;

    @Column({ type:"text" , nullable:true ,  transformer:new jsonTransformer(), comment:"扩展信息" })
    raw: string;

    // @Column({type:"date",default:"1000-01-01 00:00:00",transformer:new timeDateTransformer(),comment:"激活时间"})
    @Column({transformer:new timeDateTransformer(), nullable:true ,  comment:"激活时间"})
    active_at: Date;

    @CreateDateColumn({transformer:new timeDateTransformer()})
    created_at: Date;

    @UpdateDateColumn({transformer:new timeDateTransformer()})
    updated_at: Date;

    @Column({ length: 36 , nullable:true, comment:"租户ID" })
    team_id: string;

    @Column({ length: 64 , nullable:true,  comment:"所属人员ID" })
    owner_id: string;


}

