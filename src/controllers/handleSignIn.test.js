import { describe, expect, it } from "@jest/globals";
import { handleSignIn } from "./handleSignIn";
import { authenticationAWS } from "../modules/loginAuthentication/authenticationAWS";

describe("The handleSignIn", () => {
  it("sets errorMessage when credentials are incorrect", wrongCredentials);
  it(
    "sets errorMessage when email is listed but password doesn't match",
    nonmatchingCrendentials
  );
  it("logs in when credentials are correct", matchingCrendentials);
});

async function wrongCredentials() {
  //ARRANGE
  const event = {
    preventDefault: () => {},
    target: ["zero", { value: "aaa@aaa.com" }, { value: "aaa" }],
  };
  //ACT
  const errorMessage = await handleSignIn(event);

  //ASSERT
  expect(errorMessage).toBe("The email and password are incorrect.");
}

async function nonmatchingCrendentials() {
  //ARRANGE
  const event = {
    preventDefault: () => {},
    target: ["zero", { value: "test@email.com" }, { value: "aaa" }],
  };

  //ACT
  const errorMessage = await handleSignIn(event);

  //ASSERT
  expect(errorMessage).toBe("The email and password are incorrect.");
}

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
  debugger;
  const isAuthenticated = await authenticationAWS(event, document);
  debugger;

  //ASSERT
  expect(isAuthenticated).toBe(true);
}
