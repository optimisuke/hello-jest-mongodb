import { MongoDB } from "./mongo";
import { TestQuery } from "./testQuery";

const main = async () => {
  const mongoDB = new MongoDB();
  await mongoDB.connect();
  console.log("MongoDB Connected.");
  const collections = mongoDB.getCollections();

  const testQuery = new TestQuery(collections);
  const users = await testQuery.getUsers();
  console.log(users);
  const user = await testQuery.getUserByName("Hoge");
  console.log(user);
  await mongoDB.close();
};

main();
