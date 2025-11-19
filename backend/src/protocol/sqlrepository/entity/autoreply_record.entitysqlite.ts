import {Entity, BaseEntity,  PrimaryColumn,  CreateDateColumn ,UpdateDateColumn,Column, PrimaryGeneratedColumn,Generated, JoinColumn, ManyToMany, Index, OneToOne} from "typeorm";
import { jsonTransformer, timeDateTransformer } from "./entity-transformer";

/**
 * 自动回复实体类
 */
@Entity({ name: "cu_autoreply_record", synchronize:true})
export class AutoreplyRecordEntity extends BaseEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ comment:"类型（1、消息；2、评论；3、关注"})
    type: number;

    @Column({ length:64 , nullable:true, comment:"来源username"  })
    username: string;
    
    @Column({ length:64 , nullable:true, comment:"来源uid"  })
    user_id: string;

    @Column({ length:64 , nullable:true, comment:"来源"  })
    from_id: string;

    @Column({ length:1024 ,  nullable:true, comment:"内容"  })
    content: string;

    @Column({ length:1024 , nullable:true, comment:"处理内容"  })
    content_hand: string;

    @Column({ type:"text", nullable:true, comment:"匹配原因"  })
    match_reason: string;

    @Column({ type:"text" ,  nullable:true, transformer:new jsonTransformer(),comment:"原始信息"  })
    content_raw: string;
  
    @Column({ type:"text" , nullable:true, transformer:new jsonTransformer(), comment:"处理结果"  })
    handle_raw: string;

    @Column({ type:"int" , default:0, comment:"是否删除"  })
    is_delete:number

    @CreateDateColumn({transformer:new timeDateTransformer()})
    created_at: Date;

    @UpdateDateColumn({transformer:new timeDateTransformer()})
    updated_at: Date;

    @Column({ length: 36 , nullable:true, comment:"租户ID" })
    team_id: string;

    @Column({ length: 64 , nullable:true,  comment:"所属人员ID" })
    owner_id: string;
    
}
