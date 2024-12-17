// Outermost (1st)
export class Container {
    openingTag = "<div class='card'>";
    imgItem = "<img class='card-img-top' src='${cardObject.src}'>";
    closingTag = "</div>";
    innerHTML = "";

    constructor(content = "") {
        this.innerHTML = content;
    }
    toString() {
        return `${this.openingTag}${this.imgItem}${this.innerHTML}${this.closingTag}`;
    }
}