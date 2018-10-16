const path = require("path");

module.exports = function(app) {

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"));
  });

  app.use(function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"));
  });
};
<<<<<<< HEAD

=======
>>>>>>> d1e31451c9feb6e70241a5b977114c6069a7ac3a
