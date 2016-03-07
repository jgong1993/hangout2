var groups = require("../public/json/groups.json");

exports.thisGroup = function(req, res){
	//console.log(data);
	var name = req.params.name;
	var members = "";
	var desciption = "";

	for(var i = 0; i < groups.groups.length; i++) {
		console.log("goes in here 1");
		console.log("GROUP: " + groups["groups"][i]);

		if(typeof groups["groups"][i] === 'undefined') {
			console.log("goes in here 2");
			continue;
		}
		else if(groups["groups"][i].name == name) {
			members = groups["groups"][i].members;
			description = groups["groups"][i].description;
			console.log("FOR: " + members);
			break;
		}
	}

 	console.log("The project name is: " + name); 
    console.log(members);

	res.render('indivGroup', {
		'groupName': name,
		'members': members,
		'description': description,
		'friends': groups["friends"]
	});

};

exports.editGroup = function(req, res){
	//console.log(data);

	var friends = req.query.friend;
	var name = req.query.name;
	var description = req.query.description;
	var origName = req.query.origName;
	origName = origName.substring(7);

	console.log("friend: " +friends);
	console.log("name: " +name);
	console.log("description: " +description);
	console.log("origName: " +origName);

	for(var i = 0; i < groups.groups.length; i++) {
		if(groups["groups"][i].name == origName) {
			groups["groups"][i].members.push(friends);
			groups["groups"][i].name = name;
			groups["groups"][i].description = description;
			break;
		}
	}

	res.render('indivGroup', {
		'groupName': name,
		'members': groups["groups"][i].members,
		'description': description,
		'friends': groups["friends"]
	});
};

exports.leaveGroup = function(req,res) {
	//var key = "Trash Squad";
	//delete groups.name[key];
	var group = req.params.groupName;
	console.log("group name is: " + req.params.groupName);
	//res.render('leftAGroup',groups);

	for(var i = 0; i < groups.groups.length; i++) {
		if(typeof groups["groups"][i] === 'undefined') {
			continue;
		}
		else if(groups["groups"][i].name == group) {
			delete groups["groups"][i];
			groups["groups"].splice(i,1);
			break;
		}
	}

	res.render('viewGroups', groups);
};
