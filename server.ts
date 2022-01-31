import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import "dotenv/config";

const env = process.env;

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

let port: string | number = env.PORT;
if (port == null || port == "") {
  port = 3001;
}

app.listen(port, () => {
  console.log("Server has started successfully at port 3001");
});
