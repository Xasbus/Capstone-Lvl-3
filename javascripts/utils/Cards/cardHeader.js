import { CardBody } from "./cardBody";

export class Title {
    openingTag = "<h3 class='card-title'>";
    closingTag = "</h3>";
    innerHTML = "";

    addContainer(column = new CardBody()) {
        this.innerHTML += column;
    }

    toString() {
        return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
    }
}