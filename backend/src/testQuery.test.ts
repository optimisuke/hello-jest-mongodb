import { Collections, Test } from "./mongo";
import { TestQuery } from "./testQuery";

import { MongoClient, Db } from "mongodb";

describe("試しにテスト", () => {
  let connection: MongoClient;
  let db: Db;
  let collections: Collections;

  beforeAll(async () => {
    console.log("beforeAll");

    connection = await MongoClient.connect((global as any).__MONGO_URI__);
    db = connection.db();
    db.createCollection("test");
    collections = { test: db.collection<Test>("test") };
  });

  beforeEach(async () => {
    console.log("beforeEach");
    const test = db.collection("test");

    const doc1 = { name: "インメモリほげ", age: 36 };
    const doc2 = { name: "インメモリふが", age: 32 };
    test.insertMany([doc1, doc2]);
  });

  afterAll(async () => {
    console.log("afterAll");
    await connection.close();
  });

  test("指定したusernameのユーザーが取得できる", async () => {
    console.log("test start");

    const testQuery = new TestQuery(collections);

    const result = await testQuery.getUserByName("インメモリほげ");
    console.log(result);

    expect(result).toStrictEqual({ name: "インメモリほげ", age: 36 });
  });
});
