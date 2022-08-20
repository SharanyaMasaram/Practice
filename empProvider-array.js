var nextUserId = 1;

EmployeeProvider = function() {
  this.employees = [];
  
  this.fetchAllEmployees = function(cb) {
    cb(null, this.employees);
  };
  
  this.fetchEmployeeById = function(id, cb) {
    var foundEmployees = this.employees.filter(function(emp) {return emp._id == id});

    if (foundEmployees.length == 0) {
      cb('Employee not found', null);
    } else {
      cb(null, foundEmployees[0]);
    }
  };
  
  this.insertEmp = function(emp, cb) {
    console.log("==============================")
    console.log(emp)
    emp._id = nextUserId++;
    this.employees.push(emp);

    cb(null, emp);
  };
  
  this.updateEmp = function(emp, cb) {
    this.fetchEmployeeById(emp._id, function(error, _emp) {
      if (error) {
        cb(error, null);
      } else {
        _emp.name = emp.name;
        _emp.city = emp.city;
        _emp.state = emp.state;
    
        cb(null, _emp);
      }
    });
  };
  
  this.deleteEmp = function(id, cb) {
    console.log(" log  ",id)
    this.employees = this.employees.filter(function(emp) {return emp._id != id});
    cb(null, {_id:id});
  };
};

exports.EmployeeProvider = EmployeeProvider;