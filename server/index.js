const socket = require("socket.io");
const express = require("express");
const http = require("http");
const cors = require("cors");
const app = express();
const server = http.createServer(app);
const io = socket(server);
const bodyParser = require('body-parser');

const DB =require('./db/db.js');

// // connect to mlab database
// // make sure to replace my db string & creds with your own
// mongoose.connect(
//     `mongodb+srv://mnttnm:${mongodbPwd}@the-feed-cluster-bxufz.mongodb.net/test?retryWrites=true&w=majority`,
//     {
//         useNewUrlParser: true
//     }
// ).then(()=>{
//     console.log('Mongo connection successful');
// });

// mongoose.connection.once("open", () => {
//   console.log("conneted to database");
// });

app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

let post = {
  title: "post-title-4",
  tags: ["tag1", "tag2"],
  description: "This is a test post4",
  url: "https://www.test.com",
  views: 100,
  rating: 10,
  category: "Tweet",
  postedOn: Date.now()
};

app.post('/post', (req, res) => {
    console.log('Request received: ', req.body);
    const postToBeAdded = req.body;
    DB.addPostToDb(postToBeAdded).then(()=>{
        console.log('Post is successfully added to the collection');
        io.sockets.emit("server-post-added", { new_post: postToBeAdded });
        res.send('Got the request');
    }, (err) => {
        console.log('db operation failed', err);
    });
});

app.get('/posts', (req, res) => {
    DB.getPostsFromDB().then((data)=>{
       console.log('posts from db: ');
       console.log(JSON.stringify(data));
       res.send(data);
    }, err => {
       console.log(`couldn't fetch the posts from DB`);
    });
});

app.get('/tags', (req, res) => {
  DB.getTagsFromDB().then((data)=>{
     console.log('tags from db: ');
     console.log(JSON.stringify(data));
     res.send(data);
  }, err => {
     console.log(`couldn't fetch the posts from DB`);
  });
});

io.on("connection", function(socket) {
  socket.emit("server-msg", { msg: "Hello from server!" });
  socket.on("client-msg", function(data) {
    console.log(data);
  });
  socket.on("client-post-received", function(data) {
    console.log(data);
  });
});

server.listen(4000);
