export class CardBody {
    openingTag = "<div class='body'>";
    closingTag = "</div>";
    innerHTML = "";

    constructor(content = "") {
        this.innerHTML = content;
    }

    toString() {
        return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
    }
}