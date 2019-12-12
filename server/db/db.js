const assert = require("assert");

const mongodbPwd = process.env.MONGO_PWD || "";
const MongoClient = require("mongodb").MongoClient;
const uri = `mongodb+srv://mnttnm:${mongodbPwd}@the-feed-cluster-bxufz.mongodb.net/test?retryWrites=true&w=majority`;
const dbName = "pitara";
const client = new MongoClient(uri, { useNewUrlParser: true });

// let post = {
//   title: "post-title",
//   tags: ["tag1", "tag2"],
//   description: "This is a test post",
//   url: "https://www.test.com",
//   views: 100,
//   rating: 10,
//   category: "Youtube",
//   postedOn: Date.now()
// };

// let post1 = {
//   title: "post-title-1",
//   tags: ["tag1", "tag2"],
//   description: "This is a test post1",
//   url: "https://www.test.com",
//   views: 100,
//   rating: 10,
//   category: "Article",
//   postedOn: Date.now()
// };



// A async function always returns a promise
// also it allows us to use await inside a function and tells the
// javasscript engine that this function does contain some async code
// inside it.

// Await: tells javascript that the function is asynchronous and
// engine should wait for it to compelte before moving forward.

// This allows us to write Asynchronous code as if it was synchronous.
exports.addPostToDb = async function (post) {
  try {
    const connected = await client.connect();
    console.log("Connected correctly to server");

    // Insert a single document
    const db = client.db(dbName);
    let insertDocument = await db.collection("posts").insertOne(post);

    Promise.all[connected, insertDocument];
    assert.equal(1, insertDocument.insertedCount);
    client.close();
  } catch (err) {
    console.log(err.stack);
  }
}

exports.getPostsFromDB = async function() {
  try {
    const connected = await client.connect();
    console.log("Connected correctly to server");

    // Insert a single document
    const db = client.db(dbName);
    const col = db.collection('posts');

    // Get first two documents that match the query
    const docs = await col.find({}).toArray();
    return docs;
  } catch (err) {
    console.log(err.stack);
  }
}

exports.getTagsFromDB = async function() {
  try {
    const connected = await client.connect();
    console.log("Connected correctly to server");

    // Insert a single document
    const db = client.db(dbName);
    const col = db.collection('tags');

    // Get first two documents that match the query
    const docs = await col.find({}).toArray();
    return docs;
  } catch (err) {
    console.log(err.stack);
  }
}

// /* register-handler.js */
// exports.newEntryHandler = function (socket, post) {
//   console.log('new entry: ', post);
//   socket.emit('new-entry', post);
// };