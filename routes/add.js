var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	var newFriend = {};
	var newName = req.query.name;
	var newDesc = req.query.description;

	newFriend["name"] = newName;
	newFriend["description"] = newDesc;

	data.friends.push(newFriend);
	res.render('index', data);
	
	console.log(newFriend);
 }