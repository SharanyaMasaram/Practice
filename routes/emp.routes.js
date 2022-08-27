module.exports = app => {
    const emp = require("../controllers/emp.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", emp.create);
    // Retrieve all Tutorials
    router.get("/", emp.findAll);
    // Retrieve all published Tutorials
    router.get("/published", emp.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", emp.findOne);
    // Update a Tutorial with id
    router.put("/:id", emp.update);
    // Delete a Tutorial with id
    router.delete("/:id", emp.delete);
    // Delete all Tutorials
    router.delete("/", emp.deleteAll);
    app.use('/emp', router);
  };