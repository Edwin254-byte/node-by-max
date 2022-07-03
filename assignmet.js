const http = require("http");
const { runInNewContext } = require("vm");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(`
    <html>
        <body>
            <h1>Hello, Welcome to my page</h1>
            <form action='/create-user' method='POST'>
                username <input name='username' type='text'/>
                <button type='submit'> Submit</button
            </form>
        </body>
    </html>`);
    return res.end();
  }
  if (req.url === "/users") {
    res.write(`
    <html>
    <body>
        <ul>
            <li>User 1</li>
            <li>User 2</li>
            <li>User 3</li>
            <li>User 4</li>
        </ul>
    </body>
    </html>
    `);
    return res.end();
  }
  if (req.url === "/create-user" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const data = (Buffer.concat(body) + "").split("=")[1];
      console.log(data);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
});
server.listen(2000);
