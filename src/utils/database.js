const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/pipedreams-backend")
  .then(() => console.log("The connection to the database has been established."))
  .catch((err) => console.log(err));