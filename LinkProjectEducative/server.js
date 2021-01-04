//This file contains the javaScript for the "server".
//To start a local server type node ServerJS.js into the terminal 
//and navigate to port 3000 in the browser

//Modules; npm install express --save
const { response, request } = require("express");
const express = require("express");
const app = express();

const multer = require("multer");
const upload = multer();

const Link = require("./public/linkClass.js");

//Initial links array
const links = [];
links.push(new Link("Baptiste", "Hacker News", "news.ycombinator.com"));
links.push(new Link("Thomas", "Reddit", "reddit.com"));
links.push(new Link("Daniel", "YouTube", "youtube.com"));


//public js
let options = {};
app.use(express.static("public", options));

//Get views
app.get("/", (request, response) => {
    response.sendFile(`${__dirname}/views/homepage.html`);
});

//Get links
app.get("/api/links", (request, response) => {
    response.json(links);
});

//Post links
app.post("/links", upload.array(), (request, response) => {
    const author = request.body.author;
    const websiteName = request.body.websiteName;
    const url = request.body.url;
    const link = new Link(author, websiteName, url);
    links.unshift(link);
    response.json(link);
});

//Enable CORS
app.use((req, res, next)  => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

//Start listening to incoming requests
//If process.env.PORT is not defined, port number 3000 is used
const listener = app.listen(process.env.PORT || 3000, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Your app is listening on port ${listener.address().port}`);
  });