var proxy = require("express-http-proxy");
var app = require("express")();

const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.use("/proxy", proxy("www.google.com"));
