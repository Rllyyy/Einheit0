//CRTL+C to stop the server

//Load express package
const { response } = require("express");
const express = require("express");
const { request } = require("https");

const multer = require("multer");

const bodyParser = require("body-parser");

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

//Redirect to the basic url
app.get("/old", (request, response) => {
  response.redirect(301, "/");
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

app.use(express.static("public", options));

// Return HTML content from a html document
app.get("/hello2", (request, response) => {
  response.sendFile(`${__dirname}/views/hello2.html`);
  
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




































