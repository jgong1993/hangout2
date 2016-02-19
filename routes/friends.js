var friendList = require("../groups.json");

exports.viewFriends = function(req, res){
	res.render('friends', friendList);
};