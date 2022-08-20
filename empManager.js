EmpManager = function(app) {
    var EmployeeProvider = require('./empProvider-array').EmployeeProvider;
    var empProvider = new EmployeeProvider();
  
    empProvider.insertEmp({_id:1, name:'Rocky', city:'Omaha', state:'NE'}, function(a,b){});
    empProvider.insertEmp({_id:2, name:'Dave', city:'Stafford', state:'VA'}, function(a,b){});
  
    app.get('/', function(req,res){
      console.log(" Hello worlld");
      res.send('Hello Testing')
    })

    app.get('/emp', function(req, res) {
      
      empProvider.fetchAllEmployees(function(error, employees) {
        res.send(employees);
      });
    });
  
    app.post('/emp', function(req, res) {
      console.log("request body ",res.body);
      empProvider.insertEmp(req.body, function(error, emp) {
        if (error) {
          res.send(error, 500);
        } else {
          res.send(emp);
        }
      });
    });
  
    app.get('/emp/:id', function(req, res) {
      empProvider.fetchEmployeeById(req.params.id, function(error, user) {
        if (user == null) {
          res.send(error, 404);
        } else {
          res.send(user);
        }
      });
    });
  
    app.post('/emp/:id', function(req, res) {
      var _user = req.body;
      _user._id = req.params.id;
  
      empProvider.updateEmp(_user, function(error, emp) {
        if (emp == null) {
          res.send(error, 404);
        } else {
          res.send(emp);
        }
      });
    });
  
    app.delete('/emp/:id', function(req, res) {
      empProvider.deleteEmp(req.params.id, function(error, emp) {
        if (emp == null) {
          res.send(error, 404);
        } else {
          res.send(emp);
        }
      });
    });
  };
  
  exports.EmpManager = EmpManager;