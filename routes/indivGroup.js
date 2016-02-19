var groups = require("../groups.json");

exports.thisGroup = function(req, res){
	//console.log(data);
	var name = req.params.name;
	var members = "";

	for(var i = 0; i < groups.groups.length; i++) {
		if(groups["groups"][i].name == name) {
			members = groups["groups"][i].members;
			console.log("FOR: " + members);
			break;
		}
	}

 	console.log("The project name is: " + name); 
    console.log(members);

	res.render('indivGroup', {
		'groupName': name,
		'members': members
	});

};