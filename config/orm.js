var connection = require("./connection.js");

// UTILITIES
// ==========================================
// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

// ORM DEFINITION
// ==========================================
var orm = {

  selectAll: function (table, cb) {
    var query = "SELECT * FROM " + table + ";";
    connection.query(query, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne: function (table, cols, vals, cb) {
    // Build SQL query
    var query  = "INSERT INTO " + table + " ";
    // Pass in array of columns as a string (I think?)
    query     += "("+ cols.toString() +") ";
    // Create ? placeholders = to number of values being passed in
    query     += "VALUES (" + printQuestionMarks(vals.length) + ")";
    console.log(query);

    connection.query(query, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  updateOne: function (table, obj, condition, cb) {
    // Build SQL query
    var query   = "UPDATE " + table + " ";
    // Convert object to array, then to string
    query      += "SET " + objToSql(obj) + " ";
    query      += "WHERE " + condition;
    console.log(query);

    connection.query(query, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  updateAll: function (table, obj, cb) {
    // Build SQL query
    var query   = "UPDATE " + table + " ";
    // Convert object to array, then to string
    query      += "SET " + objToSql(obj) + " ";
    console.log(query);

    connection.query(query, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  deleteOne: function (table, condition, cb) {
    // Build SQL query
    var query   = "DELETE FROM " + table + " ";
    query      += "WHERE " + condition;
    console.log(query);

    connection.query(query, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }

}; // orm

module.exports = orm;