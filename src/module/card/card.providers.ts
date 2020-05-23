import { Injectable } from "@nestjs/common";
import Card from "src/entity/card.entity";
import CardInput from "./input/card.input";

@Injectable()
export class CardProviders {

    async searchCard(input: CardInput) {
        return Card.find({
            where: { ...input }
        })
    }

    async createCard(input: CardInput) {
        const newCard = new Card()
        newCard.name_front = input.name_front;
        newCard.name_back = input.name_back;
        return newCard.save()
    }
}