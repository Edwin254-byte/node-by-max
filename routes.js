const fs = require("fs");
const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <p>Hello world from the server side</p>
    <form action="/message" method="POST">
    name: <input type="text" name="message" />
    <button type="submit"> Submit </button>
    </form>
  </body>
</html>  
  `;
module.exports = function requestHandler(req, res) {
  const url = req.url;

  if (url === "/home") {
    //res.setHeader("Content-Type", "text/html");
    res.write(html);
    return res.end();
  }
  if (url === "/message" && req.method === "POST") {
    const body = [];
    req.on("data", function (chunck) {
      body.push(chunck);
    });
    req.on("end", function () {
      const data = Buffer.concat(body) + "";
      const message = data.split("=")[1];
      fs.writeFile("greet.txt", message, (_) => {
        res.statusCode = 302;
        res.setHeader("Location", "/home");
        return res.end();
      });
    });
  }
};
