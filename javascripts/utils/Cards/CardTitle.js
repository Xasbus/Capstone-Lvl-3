import { CardBody } from "./CardBody.js";

export class Title {
    openingTag = "<h3 class='card-title'>";
    closingTag = "</h3>";
    innerHTML = "";

    addBody(cardBody = new CardBody()) {
        this.innerHTML += cardBody;
    }

    toString() {
        return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
    }
}