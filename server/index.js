const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World, from express");
});
const port = 8080;
app.listen(port, () =>
    console.log(`Hello world app listening on port ${port}!`)
);
