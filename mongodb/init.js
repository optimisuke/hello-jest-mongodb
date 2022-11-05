db = db.getSiblingDB("admin");
db.auth("root", "password");
db.createUser({
  user: "testuser",
  pwd: "password",
  roles: [
    {
      role: "readWrite",
      db: "hoge",
    },
  ],
});

db = db.getSiblingDB("hoge");
db.createCollection("test");
const doc1 = { name: "Hoge", age: 36 };
const doc2 = { name: "Fuga", age: 32 };
db.test.insertMany([doc1, doc2]);
