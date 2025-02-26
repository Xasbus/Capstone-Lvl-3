import { describe, expect, it } from "@jest/globals";
import { handleSignIn } from "./handleSignIn";
import { authenticationAWS } from "../modules/loginAuthentication/authenticationAWS";

describe("The handleSignIn", () => {
  it(
    "sets errorMessage when both email and password are incorrect",
    wrongCredentials
  );
  it(
    "sets errorMessage when email is listed but password doesn't match",
    nonmatchingCrendentials
  );
  it(
    "sets errorMessage when email is incorrect and uses a password that is listed",
    rightPassword
  );
  it(
    "sets errorMessage when email is right, but password is empty.",
    emptyPassword
  );
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
async function rightPassword() {
  //ARRANGE
  const event = {
    preventDefault: () => {},
    target: ["zero", { value: "testt@email.com" }, { value: "test" }],
  };

  //ACT
  const errorMessage = await handleSignIn(event);

  //ASSERT
  expect(errorMessage).toBe("The email and password are incorrect.");
}
async function emptyPassword() {
  //ARRANGE
  const event = {
    preventDefault: () => {},
    target: ["zero", { value: "testt@email.com" }, { value: "" }],
  };

  //ACT
  const errorMessage = await handleSignIn(event);

  //ASSERT
  expect(errorMessage).toBe("The email and password are incorrect.");
}
