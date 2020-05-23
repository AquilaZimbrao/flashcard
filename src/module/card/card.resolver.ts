import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { Injectable, Type  } from "@nestjs/common";
import { CardProviders } from "./card.providers";
import Card from "src/entity/card.entity";
import CardInput from "./input/card.input";

@Resolver(() => Card)
@Injectable()
export class CardResolver {
    constructor(
        private readonly cardProvider: CardProviders,
    ) {}

    @Query(() => [Card], { nullable: true })
    async searchCard(@Args('data') input: CardInput): Promise<Card[]> {
        return this.cardProvider.searchCard(input)
    }

    @Mutation(() => Card)
    async createCard(@Args('data') input: CardInput): Promise<Card> {
        if (input) {
            return this.cardProvider.createCard(input);
        } else {
            throw new Error()
        }
    }
}