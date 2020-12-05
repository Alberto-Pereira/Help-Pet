const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors("45.226.43.154", "201.34.242.70", "177.207.229.187"));

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333);
