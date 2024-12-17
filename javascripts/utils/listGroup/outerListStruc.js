import { ListItems } from "./listGroupItems.js";

export class ListGroupTop {
    openingTag = "<ul class='list-group'>";
    closingTag = "</ul>";
    innerHTML = "";

    addListItems(listItems = new ListItems()) {
        this.innerHTML += listItems;
    }
    toString() {
        return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
    }
}