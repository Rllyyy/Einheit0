//CRTL+C to stop the server

//Load express package
const { response } = require("express");
const express = require("express");
const { request } = require("https");

//Load multer package (for forms)
const multer = require("multer");

//Load body 
const bodyParser = require("body-parser");

//Load logger to log information
const {logger, old} = require("./logger.js");

//Load data.js
const data = require("./data"); //data.channels[n].id .name .last_updated

//Access the exported service
const app = express();

//Access the exported service
const upload = multer();

// Access the JSON parsing service
const jsonParser = bodyParser.json();

// Define an article list
const articles = [
  { id: 1, title: "First article", content: "Hello World!" },
  {
    id: 2,
    title: "Lorem ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit mauris ac porttitor accumsan. Nunc vitae pulvinar odio, auctor interdum dolor. Aenean sodales dui quis metus iaculis, hendrerit vulputate lorem vestibulum."
  },
  {
    id: 3,
    title: "Lorem ipsum in French",
    content:
      "J’en dis autant de ceux qui, par mollesse d’esprit, c’est-à-dire par la crainte de la peine et de la douleur, manquent aux devoirs de la vie. Et il est très facile de rendre raison de ce que j’avance."
  }
];

//Return a string for request to the root URL ("/")
app.get("/", (request, response) => {
  response.send("Hello from Express! This is the root!");
});

//Use middleware on every call
//Log all connection to server
app.use(logger);


app.get("/api/channel", (request, response) => {
  //return the list of channels
  //respond with a 200
  response.json(data);
  console.log("Get", data.channels)
});

app.get("/api/channel/:id", (req, res) => {
  //return specific channel
  // respond with a 200
  let obj = data.channels.find(item => item.id == parseInt(req.params.id));
  res.json(obj);
  console.log("GET", obj);
});

app.post("/api/channel", (req, res) => {
  //add new channel then return new list
  // respond with a 201
  let { name } = req.body;
  console.log(req.body);
  let id =
    data.channels.reduce((prev, curr) => {
      return prev < curr.id ? curr.id : prev;
    }, 0) + 1;
  let last_update = Date.now();
  let obj = { id, name, last_update };
  data.channels.push(obj);
  res.status(201).json(obj);
  console.log("POST", data.channels);
});

app.put("/api/channel/:id", (req, res) => {
  //replace a channel based on id
  // respond with 200 or 204
  // 202 if the operation is async and still pending
  // Basically an UPDATE but we could also do an INSERT if the id is available
  // Or we could choose to create a new id and do an INSERT if the id does not exist
  let id = parseInt(req.params.id);
  let name = req.body.name;
  let last_update = Date.now();
  let idx = data.channels.findIndex(item => item.id === id);
  data.channels[idx].name = name;
  data.channels[idx].last_update = last_update;
  res.status(200).json(data.channels[idx]);
  console.log("PUT", data.channels);
});

app.patch("/api/channel/:id", (req, res) => {
  //edit a channel
  // respond with 200 or 204
  // 202 if the operation is async and still pending
  let id = req.params.id;
  let name = req.body.name;
  let last_update = Date.now();
  let idx = data.channels.findIndex(item => item.id === id);
  data.channels[idx].name = name;
  data.channels[idx].last_update = last_update;
  res.status(200).json(obj);
  console.log("PATCH", data.channels);
});

app.delete("/api/channel/:id", (req, res) => {
  //delete a channel
  //respond with 200 or 204
  // 202 if the operation is async and still pending
  let id = req.params.id;
  data.channels = data.channels.filter(item => item.id !== id);
  res.status(204).end();
  console.log("DELETE", data.channels);
});

app.head("/api/channel", (req, res) => {
  //return same headers as get. no content. to check that endpoint is functional
  res.status(200).end();
});

app.options("/api/channel", (req, res) => {
  //return headers including ALLOW to say what methods are allowed
  res.status(200);
  res.set("Allow", "GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD");
  res.set("Access-Control-Allow-Origin", "*"); //cors
  res.set("Content-Length", "0");
  res.end();
});

//Redirect to the basic url
//Middleware functions can also be put into a get request (see function how)
app.get("/old", old, (request, response) => {
  response.redirect(301, "/");
});

//Send default 404 response
app.get("/404", (request, response) => {
  response.status(404).end();
});

//Send default request objects
app.get("/request", (request, response) => {
  const htmlContent = 
  `<p>Headers: ${request.headers}</p>
  <p>Url: ${request.url}</p>
  <p>IP: ${request.ip}</p>
  <p>Hostname: ${request.hostname}</p>
  <p>Method: ${request.method}</p>
  <p>Protocol: ${request.protocol}</p>
  <p>Path: ${request.path}</p>
  <p>Query: ${request.query}</p>
  <p>Subdomains: ${request.subdomains}</p>
  <p>Params: ${request.params}</p>`;
  response.send(htmlContent);
})


// Return the articles list in JSON format
//http://localhost:3000/api/articles
app.get("/api/articles", (request, response) => {
  response.json(articles);
});

//Post Data from Form Data
app.post("/animals", upload.array(), (request, response) => {
  const name = request.body.name;
  const vote = request.body.strongest;
  response.send(`Hello ${name}, you voted: ${vote}`);
});

// Handle submission of a JSON car array
app.post("/api/cars", jsonParser, (request, response) => {
  const cars = request.body;
  response.send(`You sent me a list of cars: ${JSON.stringify(cars)}`);
});

// Return HTML content for request to "/hello"
app.get("/hello", (request, response) => {
  const htmlContent = `<!doctype html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>Hello web page</title>
  </head>
  <body> 
    <h1>Hello!</h1>
    <h2>This page was returned by </h2>
  </body>
  </html>`;
  response.send(htmlContent);
});

let options = {
};

//make the public folder visible
app.use(express.static("public", options));

// Return HTML content from a html document
app.get("/hello2", (request, response) => {
  response.sendFile(`${__dirname}/views/hello2.html`);

});

//Enable CORS
//Alternative: npm install cors --save
//const cors = require("cors");
//app.use(cors());
app.use((req, res, next) => {
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




































