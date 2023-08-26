import express from "express";
import http from "http";

const app = express();
const server = http.createServer(app);

const staticFileMiddleware = express.static("dist");
app.use(staticFileMiddleware);

server.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});

export default server;
