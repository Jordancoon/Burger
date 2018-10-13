var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// ROUTES
// ==========================================
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function (data) {
    res.render("index", {burgers: data});
  });
});

router.post("/", function(req, res) {
  console.log(req.body.burgerName);
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.burgerName, false],
    function() {
      res.redirect("/");
  });
});

router.put("/", function(req, res) {
  var condition = "id = " + req.body.id;
  burger.updateOne(
    {
      devoured: true
    },
    condition,
    function () {
      res.redirect("/");
    }
  );
});

router.delete("/", function(req, res) {
  var condition = "id = " + req.body.deleteId;
  burger.deleteOne(
    condition,
    function () {
      res.redirect("/");
    }
  );
});

router.get("/uneatall", function(req, res) {
  burger.updateAll(
    {
      devoured: false
    },
    function () {
      console.log("All burgers un-eaten. So hungry.");
      res.redirect("/");
    }
  );
});




// Export routes for server.js to use.
module.exports = router;