import { Collections, Test } from "./mongo";

export class TestQuery {
  collections: Collections;
  constructor(collections: Collections) {
    this.collections = collections;
  }
  getUsers = async () => {
    const result = (await this.collections.test.find().toArray()) as Test[];
    return result;
  };
  getUserByName = async (name: string) => {
    const result = await this.collections.test.findOne(
      { name: name },
      { projection: { _id: 0 } }
    );
    return result as Test;
  };
}
