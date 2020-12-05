const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(
  cors(
    "https://help-pet.netlify.app",
    "help-pet.netlify.app",
    "http://help-pet.netlify.app"
  )
);

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333);
