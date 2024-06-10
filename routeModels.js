const con = require('../database');  // Adjust the path as necessary

const Route = {
  // Get all routes
  getAll: function(callback) {
    const sql = 'SELECT * FROM route';
    con.query(sql, callback);
  },

  // Find a route by Route_ID
//   findByRouteID: function(Route_ID, callback) {
//     const sql = 'SELECT * FROM routes WHERE Route_ID = ?';
//     con.query(sql, [Route_ID], callback);
//   },

//   // Create a new route
  create: function(route, callback) {
    const sql = 'INSERT INTO route (Route_ID, Start, End, RouteDescription) VALUES (?, ?, ?, ?)';
    con.query(sql, [route.Route_ID, route.Start, route.End, route.RouteDescription], function (err, result) {
      if (err) return callback(err);
      // Retrieve the inserted Route_ID
      const routeID = result.insertId; 
      callback(null, routeID);  
    });
  },

  // Update a route by Route_ID
    update: function(Route_ID, route, callback) {
    const sql = 'UPDATE route SET Start = ?, End = ?, RouteDescription = ? WHERE Route_ID = ?';
    con.query(sql, [route.Start, route.End, route.RouteDescription, Route_ID], function (err, result) {
      if (err) return callback(err);
      callback(null, result.affectedRows);  // Number of rows affected
    });
  }

//   // Delete a route by Route_ID
//   delete: function(Route_ID, callback) {
//     const sql = 'DELETE FROM route WHERE Route_ID = ?';
//     con.query(sql, [Route_ID], function (err, result) {
//       if (err) return callback(err);
//       callback(null, result.affectedRows);  // Number of rows affected
//     });
//   }
};

module.exports = Route;
