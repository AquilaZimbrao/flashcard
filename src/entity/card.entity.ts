import { Entity, Column, ObjectIdColumn, BaseEntity } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export default class Card extends BaseEntity {

  @Field()
  @ObjectIdColumn()
  id: string;

  @Field()
  @Column({ length: 500 })
  name_front: string;

  @Field()
  @Column({ length: 500 })
  name_back: string;
}