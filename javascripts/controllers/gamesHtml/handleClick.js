import { parseResp } from "../../modules/parseResp.js";

window.handleClick = handleClick;

export function handleClick() {
  debugger;
  const promise = fetch(
    "https://opentdb.com/api.php?amount=3&category=15&type=multiple"
  );
  promise.then(parseResp);
}
