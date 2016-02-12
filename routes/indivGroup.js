exports.thisGroup = function(req, res){
	//console.log(data);
	var name = req.params.name;
 	console.log("The project name is: " + name);  
	res.render('indivGroup', {
		'groupName': name
	});

};