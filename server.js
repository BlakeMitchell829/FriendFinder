const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 8080;
<<<<<<< HEAD

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("../app/routing/apiRoutes")(app);
require("../app/routing/htmlRoutes")(app);

app.listen(PORT, () => {
  console.log("Server listening on PORT: " + PORT);
});

=======

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, () => {
  console.log("Server listening on PORT: " + PORT);
});
>>>>>>> d1e31451c9feb6e70241a5b977114c6069a7ac3a
