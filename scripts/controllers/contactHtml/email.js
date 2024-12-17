import { output } from "../../utils/output.js";
import { getServerResponse1 } from "../../modules/getServerRespone/getServerResponse1.js";
import { parseResponse } from "../../modules/parseResponse.js";

window.handleEmail = handleEmail;

export function handleEmail(event) {
  event.preventDefault();
  // const form = event.target;
  // const passwordInput = form[0];
  // const value = passwordInput.value;
  output(` <br>Submitting your concerns. . . `);
  const promise = new Promise(getServerResponse1);
  promise.then(parseResponse);
}
