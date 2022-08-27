const db = require("../models");
const emp = db.emp;
const Op = db.Sequelize.Op;

// Create and Save a new Empployee
exports.create = (req, res) => {
   // Validate request
   console.log('In Create function with body ',req.body);
   if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Empployee
  const employeeObj = {
    name: req.body.name,
    state: req.body.state,
    city: req.body.city ? req.body.city : false
  };
  // Save Empployee in the database
  emp.create(employeeObj)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Employee."
      });
    });
};
// Retrieve all Empployees from the database.
exports.findAll = (req, res) => {
   console.log('In FindAll')
    emp.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Empployees."
        });
      });
};
// Find a single Empployee with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  console.log('In findOne with id ',id)
  emp.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Employee with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Employee with id=" + id
      });
    });
};
// Update a Empployee by the id in the request
exports.update = (req, res) => {
  
};
// Delete a Empployee with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  console.log('In Delete function with id ',id)
  emp.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Emp was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Emp with id=${id}. Maybe Emp was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Emp with id=" + id
      });
    });
};
// Delete all Empployees from the database.
exports.deleteAll = (req, res) => {
  
};
// Find all published Empployees
exports.findAllPublished = (req, res) => {
  
};