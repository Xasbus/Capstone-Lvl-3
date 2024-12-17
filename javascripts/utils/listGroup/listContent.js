export class Content {
    openingTag = "<div>";
    closingTag = "</div>";
    innerHTML = "";

    constructor(content = "") {
        this.innerHTML = content;
    }
    toString() {
        return `${this.openingTag}${this.innerHTML}${this.closingTag}`;
    }
}