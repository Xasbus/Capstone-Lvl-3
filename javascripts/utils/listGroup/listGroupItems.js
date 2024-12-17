import { Content } from "./listContent.js";

export class ListItems {
    openingTag = "<li class='list-group-item'>";
    closingTag = "</li>";
    innerHTML = "";

    addContent(listContent = new Content()) {
        this.innerHTML += listContent;
    }

    toString() {
        return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
    }
}