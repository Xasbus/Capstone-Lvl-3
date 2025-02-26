import { describe, expect, it } from "@jest/globals";
import { handleSignIn } from "./handleSignIn";

describe("The handleSignIn", () => {
  // it("sets errorMessage when credentials are incorrect", wrongCredentials);
  // it(
  //   "sets errorMessage when email is listed but password doesn't match",
  //   nonmatchingCrendentials
  // );
  it("logs in when credentials are correct", matchingCrendentials);
});

async function matchingCrendentials() {
  //ARRANGE
  const event = {
    preventDefault: () => {},
    target: ["zero", { value: "test@email.com" }, { value: "test" }],
  };

  const document = {
    getElementById: () => {},
  };

  //ACT
  const result = await handleSignIn(event);

  //ASSERT
  expect(result).toBe(true);
}
