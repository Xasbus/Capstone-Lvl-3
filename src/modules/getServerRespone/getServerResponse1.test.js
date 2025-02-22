import { describe, expect, it } from "@jest/globals";

describe("The getServerResponse1 function", () => {
  it("receives a response when promise is fulfilled", receiveResponse);
});

async function receiveResponse() {
  // ARRANGE
  const resolveValue = JSON.stringify(response);
  // ACT
  const response = await resolve(resolveValue);

  // ASSERT
  expect(response).toEqual({ JSON });
}
