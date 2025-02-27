import { describe, expect, it } from "@jest/globals";
import { getServerResponse1 } from "../modules/getServerRespone/getServerResponse1";

describe("The handleEmail", () => {
  it("sends response when an email is entered", intakeEmail);
});

function intakeEmail() {
  //ARRANGE
  const event = {
    preventDefault: () => {},
  };

  //ACT
  const response = new Promise(getServerResponse1);

  //ASSERT
  expect(response).toBe();
}
