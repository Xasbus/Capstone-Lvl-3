import { output } from "../../utils/output.js";
import { getServerResponse1 } from "../../modules/getServerRespone/getServerResponse1.js";
import { parseResponse } from "../../modules/parseResponse.js";

export function handleEmail(event) {
  event.preventDefault();
  output(` <br>Submitting your concerns. . . `);
  const promise = new Promise(getServerResponse1);
  promise.then(parseResponse);
}
