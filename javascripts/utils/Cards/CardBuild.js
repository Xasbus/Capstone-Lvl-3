// Outermost (1st)
import { Title } from "./CardTitle.js";

export class Card {
    openingTag = "<div class='card'>";
    closingTag = "</div>";
    innerHTML = "";

    addHeader(title = new Title()) {
        this.innerHTML += title;
    }

    toString() {
        return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
    }
}