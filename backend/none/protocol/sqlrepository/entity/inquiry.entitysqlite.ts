import {Entity, BaseEntity,  PrimaryColumn,  CreateDateColumn ,UpdateDateColumn,Column, PrimaryGeneratedColumn,Generated, JoinColumn, ManyToMany, Index, OneToOne} from "typeorm";
import { jsonTransformer, timeDateTransformer } from "./entity-transformer";

/**
 * 直播互动规则实体类
 */
@Entity({ name: "cu_inquiry", synchronize:true})
export class InquiryEntity extends BaseEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({default:0, comment:"是否处理" })
    state: number;

    @Column({length: 36 , nullable:true, comment:"任务名" })
    task_id: string;

    // @Column({length: 36 , nullable:true, comment:"用户头像" })
    // avatar: string;

    // @Column({length: 36 , nullable:true, comment:"用户id" })
    // uid: string;

    // @Column({length: 128 , nullable:true, comment:"用户" })
    // username: string;

    @Column({type:"text" , nullable:true, comment:"消息内容" })
    content: string;

    @Column({ length: 64 , nullable:true, comment:"评论用户id"})
    user_id: string;

    @Column({ length: 36  , nullable:true , comment:"来源类型" })
    souce: string;

    @Column({ length: 64 , nullable:true, comment:"来源id"})
    source_id: string;

    // {author_id,username,user_id}
    @Column({ type:"text" , nullable:true ,  transformer:new jsonTransformer(), comment:"来源信息" })
    source_raw: string;

    @Column({ type:"text" , nullable:true ,  transformer:new jsonTransformer(), comment:"扩展信息" })
    raw: string;

    @CreateDateColumn({ transformer: new timeDateTransformer() })
    created_at: Date;

}
