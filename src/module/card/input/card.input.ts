import { Field, InputType } from '@nestjs/graphql';

@InputType()
export default class CardInput {
  @Field({ nullable: true })
  readonly id: string;

  @Field({ nullable: true })
  readonly name_front: string;

  @Field({ nullable: true })
  readonly name_back: string;
}