import {Entity, BaseEntity,  PrimaryColumn,  CreateDateColumn ,UpdateDateColumn,Column, PrimaryGeneratedColumn,Generated, JoinColumn, ManyToMany, Index, OneToOne} from "typeorm";
import { OneToMany,ManyToOne,JoinTable} from "typeorm";
import { Inject, forwardRef } from "@nestjs/common";
import { timeDateTransformer } from "src/common/entity-transformer";

/**
 * 智能素材
 */
@Entity({name:"cu_protocol_blacklist",synchronize: false})
export class UserBlacklistEntity extends BaseEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 36 , nullable:true, comment:"昵称"})
    name: string;

    @Column({ type:"text" , nullable:true, comment:"头像"})
    avatar: string;
    
    @Column({ length: 36 , nullable:true, comment:"uid"})
    uid: string;

    @Column({ length: 128 , nullable:true, comment:"secuid"})
    sec_uid: string;
    
    @Column({default:0, comment:"白名单"})
    iswhite: number;

    @Column({type:"smallint",default:1, comment:"类型 1黑名单 2审核"})
    type: number;

    @Column({type:"smallint",default:1, comment:"状态"})
    state: number;
    
    @Column({default:0, comment:"拉黑次数"})
    count: number;

    @Column({ length: 255 , nullable:true, comment:"备注"})
    remark: string;

    // @Column({ type:"json" , nullable:true, comment:"拉黑原因"})
    // reason: object;

    @Column({ length: 36 , nullable:true, comment:"团队ID" })
    @Index()
    team_id: string;

    @UpdateDateColumn({transformer:new timeDateTransformer()})
    updated_at: Date;



}

