//Modules
const express = require("express");
const app = express();




//public js
let options = {};
app.use(express.static("public", options));

//Get views
app.get("/", (request, response) => {
    response.sendFile(`${__dirname}/views/homepage.html`);
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