import {Entity, BaseEntity,  PrimaryColumn,  CreateDateColumn ,UpdateDateColumn,Column, PrimaryGeneratedColumn,Generated, JoinColumn, ManyToMany, Index, OneToOne} from "typeorm";
import { jsonTransformer, timeDateTransformer } from "./entity-transformer";

/**
 * 直播互动规则实体类
 */
@Entity({ name: "cu_live_recoreds", synchronize:true})
export class LiveRecordsEntity extends BaseEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 128 , nullable:true})
    room_id: string;

    @Column({ length: 128 , nullable:true, comment:"直播间主播"})
    liveowner: string;

    @Column({default:0, comment:"关注级别" })
    level: number;

    @Column({length: 36 , nullable:true, comment:"分组" })
    group: string;

    @Column({length: 36 , nullable:true, comment:"用户头像" })
    avatar: string;

    @Column({length: 36 , nullable:true, comment:"用户id" })
    uid: string;

    @Column({length: 128 , nullable:true, comment:"用户" })
    username: string;

    @Column({ length: 36  , nullable:true , comment:"事件" })
    type: string;

    @Column({type:"text" , nullable:true, comment:"消息内容" })
    content: string;

    @Column({ type:"text" , nullable:true ,  transformer:new jsonTransformer(), comment:"扩展信息" })
    raw: string;

    @CreateDateColumn({ transformer: new timeDateTransformer() })
    created_at: Date;

}
