// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");


// Select all of the burgers
var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res){
      cb(res);
      console.log(res);
    });
  },

  // Insert a burger
  insertOne: function(burger_name, cb) {
    orm.insertOne("burgers",["burger_name"],[burger_name],cb)
  },

  updateOne: function(item_id, cb) {
    var condition = "id="+item_id;
    orm.updateOne("burgers",{devoured:true},condition,cb);
  },

};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
