const express = require("express");
const people = require("./people.json");

const app = express();

var healthCheckRespCode = 200;

app.set("view engine", "pug");

// serve static files from the `public` folder
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Homepage",
    people: people.profiles
  });
});

app.get("/profile", (req, res) => {
  const person = people.profiles.find(p => p.id === req.query.id);
  res.render("profile", {
    title: `About ${person.firstname} ${person.lastname}`,
    person
  });
});

app.get("/health", (req, res) => {
  let body = { status: 'UP' };

  if (healthCheckRespCode == 500) {
    body.status = 'DOWN';
  }

  res.status(healthCheckRespCode).json(body);
});

app.get("/health/:status", (req, res) => {
  healthCheckRespCode = req.params.status;
  res.status(200).send('');
});

const server = app.listen(8080, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
