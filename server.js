const express = require("express"),
  app = express(),
  path = require("path"),
  cookieParser = require("cookie-parser");

const port = process.env.YOUR_PORT || process.env.PORT || 33342;

app.use(cookieParser());

app.get("/", (req, res) => {
  if (req.headers.accept === '*/*') {
    if (req.cookies.token === 'admin') {
      res.sendFile(__dirname + "/public/" + "secound.html");
    }
  } else {
    res.cookie("token", "user");
    res.sendFile(__dirname + "/public/" + "index.html");
  }
});

app.listen(port, () => {
  console.log(`Start on port:${port}`);
});

app.use(express.static(path.join(__dirname, "public")));
