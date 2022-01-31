import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import "dotenv/config";
var env = process.env;
var __dirname = dirname(fileURLToPath(import.meta.url));
var app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});
var port = env.PORT;
if (port == null || port == "") {
    port = 3001;
}
app.listen(port, function () {
    console.log("Server has started successfully at port 3001");
});
