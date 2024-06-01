const express = require("express");
const cors = require('cors')
const app = express();
app.use(express.static("public"));
app.use(cors());
app.set("views engine", "ejs");
app.set("views", "./views");
app.listen(3000);1``

app.get("/", function (req, res) {
    res.render("trangchu");   
});