// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db/db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
var port = process.env.port || 3001;
server.listen(port, () => {
  console.log("JSON Server is running");
});
