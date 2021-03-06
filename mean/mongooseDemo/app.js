const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8888;

app.use(express.static(path.join(__dirname, "./public/dist/public")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ urlencoded: true }));

require("./server/config/mongoose");
require("./server/config/routes")(app);

app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}!`);
})