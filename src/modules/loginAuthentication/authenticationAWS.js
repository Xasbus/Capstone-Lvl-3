import { DynamoDB } from "@aws-sdk/client-dynamodb";
import {
  accessKeyId,
  region,
  secretAccessKey,
} from "../../../.aws/credentials";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";

export async function authenticationAWS(email = "", password = "") {
  const apiKey = {
    region: region,
    credentials: {
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
    },
  };

  const client = new DynamoDB(apiKey);
  const niceClient = new DynamoDBDocument.from(client);

  const request = {
    TableName: "logins",
    Key: { email: "1test1@email.com" },
  };

  const response = await niceClient.get(request);
  const matchingLogin = response.Item;
  const isAuthenticated = password === matchingLogin.password;
  return isAuthenticated;
}

// const client = new Database(apiKey);
// const resolveValue = await client.getData(logins, email);
// const matchingLogin = resolveValue;
// const isAuthenticated = password === matchingLogin.password;
// return isAuthenticated;
