var nextUserId = 1;

EmployeeProvider = function() {
  this.employees = [];
  const mysql = require('mysql2');
  // create the connection to database
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'practice',
    password:'admin123'
  });
  this.fetchAllEmployees = function(cb) {
    let emp;
      connection.query(
        'SELECT * FROM employee',
        function(err, results, fields) {
          console.log(results); // results contains rows returned by server
          cb(null, results);
          // console.log(err," ggggggg"); // fields contains extra meta data about results, if available
        }
      );
      // connection.end();
      
  };
  
  this.fetchEmployeeById = function(id, cb) {

    let query = "select * from employee WHERE id = '"+id+"'";
    connection.query(query, (err, rows) => {
      if(err) throw err;
      console.log("rows ",rows);
      if(rows.length > 0){
        cb(null, rows);
      }else{
        cb('Employee not found', null);
      }
      console.log('Number of rows affected = ' + rows.affectedRows);
    });

    // var foundEmployees = this.employees.filter(function(emp) {return emp.id == id});

    // if (foundEmployees.length == 0) {
    //   cb('Employee not found', null);
    // } else {
    //   cb(null, foundEmployees[0]);
    // }
  };
  
  this.insertEmp = function(emp, cb) {
    console.log("==============================")
    console.log(emp)
    emp.id = nextUserId++;
    // this.employees.push(emp);
    // console.log(req.body)
    connection.query('INSERT INTO employee (id, name, state,city) VALUES  (?,?,?,?)',
     [emp.id, emp.name,emp.state,emp.city],(error, 
          results) => {
       if (error){
          console.log('error occured while inserting the data ',error)
       }
  
       });
      //  connection.end();
    cb(null, emp);
  };
  
  this.updateEmp = function(emp, cb) {
    this.fetchEmployeeById(emp.id, function(error, _emp) {
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
    let query = "DELETE FROM employee WHERE id = '"+id+"'";
    connection.query(query, (err, rows) => {
      if(err) throw err;

      console.log('Number of rows deleted = ' + rows.affectedRows);
    });
    // this.employees = this.employees.filter(function(emp) {return emp.id != id});
    cb(null, {id:id});
  };
};

exports.EmployeeProvider = EmployeeProvider;