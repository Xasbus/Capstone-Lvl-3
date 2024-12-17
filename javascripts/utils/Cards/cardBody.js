import { Container } from "./cardContainer";

export class CardBody {
    openingTag = "<div class='body'>";
    closingTag = "</div>";
    innerHTML = "";

    addTitle(column = new Container()) {
        this.innerHTML += column;
    }

    toString() {
        return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
    }
}