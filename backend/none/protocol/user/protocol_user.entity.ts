import {Entity, BaseEntity,  PrimaryColumn,  CreateDateColumn ,UpdateDateColumn,Column, PrimaryGeneratedColumn,Generated, JoinColumn, ManyToMany, Index, OneToOne} from "typeorm";
import { OneToMany,ManyToOne,JoinTable} from "typeorm";
import { Inject, forwardRef } from "@nestjs/common";
import { timeDateTransformer } from "src/common/entity-transformer";

/**
 * 智能素材
 */
@Entity({name:"cu_protocol_user",synchronize: false})
export class ProtocolUserEntity extends BaseEntity{

    @PrimaryColumn({ length: 128})
    // @Generated('uuid')
    id: string;

    @Column({ length: 36 , nullable:true, comment:"名称"})
    name: string;

    @Column({ type:"text" , nullable:true, comment:"头像"})
    avatar: string;

    @Column({ length:"128" , nullable:true, comment:"头像urid"})
    avatar_uri: string;

    // @Column({ length: 255 , nullable:true, comment:"手机"})
    // mobile: string;

    // @Column({default:0, comment:"性别"})
    // sex: number;

    // @Column({ length: 36 , nullable:true, comment:"os"})
    // os:string;

    // @Column({ length: 255 , nullable:true, comment:"ip"})
    // ip:string;

    // @Column({ length: 36 , nullable:true, comment:"城市"})
    // city:string;

    // @Column({ length: 36 , nullable:true, comment:"省"})
    // province:string;

    @Column({ type:"json" , nullable:true, comment:"访问记录"})
    raw: object;

    @Column({ type:"json" , nullable:true, comment:"访问来源记录"})
    raw_from: object;

    @Column({ length: 36 , nullable:true, comment:"抖音openid"})
    @Index()
    dy_open_id: string;

    @Column({ length: 36 , nullable:true, comment:"openid"})
    @Index()
    wx_open_id: string;

    @Column({ length: 36 , nullable:true, comment:"所属人员ID" })
    owner_id: string;

    @Column({ length: 36 , nullable:true, comment:"团队ID" })
    team_id: string;

    // @Column({type:"datetime",transformer:new timeDateTransformer(), comment:"过期时间"})
    // expire_at: Date;

    @CreateDateColumn({transformer:new timeDateTransformer()})
    created_at: Date;

    @UpdateDateColumn({transformer:new timeDateTransformer()})
    updated_at: Date;



}

