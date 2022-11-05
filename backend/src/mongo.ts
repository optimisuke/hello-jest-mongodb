import { Collection, MongoClient, ObjectId } from "mongodb";

export type Test = {
  _id?: ObjectId;
  name: string;
  age: number;
};

export type Collections = {
  test: Collection<Test>;
};

export class MongoDB {
  collections: Collections | undefined;
  client: MongoClient | undefined;
  connect = async () => {
    const URL =
      process.env.MONGO_URL ||
      "mongodb://testuser:password@127.0.0.1:27017/hoge?authSource=admin";
    this.client = await MongoClient.connect(URL);
    const db = this.client.db("hoge");
    // this.collections!.test =
    const test = db.collection<Test>("test");
    this.collections = { test: test };
  };
  getCollections = () => {
    return this.collections!;
  };
  close = async () => {
    await this.client?.close();
  };
}
