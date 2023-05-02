const express = require("express");
const app = express();
const people = require("./router/people");
const auth = require("./router/auth");

app.use(express.static("./methods-public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/people", people);
app.use("/login", auth);

app.listen(5000, () => {
  console.log("listening on port 3000...");
});
