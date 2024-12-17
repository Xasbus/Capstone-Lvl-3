import { Column } from "../utils/gridSys/column.js";
import { GridSytem } from "../utils/gridSys/gridSystem.js";
import { output } from "../utils/output.js";
import { Row } from "../utils/gridSys/row.js";

window.gridSystemExample = gridSystem;

export function gridSystem() {
    debugger;

    const gridSystem = new GridSytem();
    for (let rowNumber = 1; rowNumber <= 3; rowNumber++) {
        const row = new Row();

        for (let columnNumber = 1; columnNumber <= 3; columnNumber++) {
            const column = new Column(`Column ${columnNumber}`);
            row.addColumn(column);
        }

        gridSystem.addRow(row);
    }
    output(gridSystem);
}