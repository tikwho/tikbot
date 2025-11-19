import { Entity, Column, PrimaryColumn , PrimaryGeneratedColumn, UpdateDateColumn, Index, CreateDateColumn, BaseEntity } from 'typeorm';
import { jsonTransformer, timeDateTransformer } from "./entity-transformer";

@Entity({
  name: 'cu_account_raw',
  orderBy:{updated_at:"DESC"},
  synchronize:true
})
export class AccountRawEntity extends BaseEntity {

  @PrimaryColumn()
  id: string;

  // @Column({ comment:"ID"})
  // @Index()
  // obj_id: string;

  @Column({ type:"text" , nullable:true ,  transformer:new jsonTransformer(), comment:"扩展信息" })
  raw: string;

  @UpdateDateColumn({ transformer:new timeDateTransformer(),comment:"更新时间"})
  updated_at: Date;

  static getFull(raw){
    let data = Object.assign({},raw||{});
    try {
      data.avatar = data.avatar_larger.url_list[0];
    } catch (error) {}
    return data;
  }
  
}

