require("dotenv").config();
// global.TextEncoder = require("util").TextEncoder("utf-8", { ignoreBOM: true }); 
const http = require("http");
const app = require("./app");

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});