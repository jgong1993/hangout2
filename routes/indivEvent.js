var data = require("../events.json");

exports.thisEvent = function(req, res){
	//console.log(data);
	var title = req.params.title;
 	//console.log("The project name is: " + title);  
	res.render('indivEvent', {
		'eventName': title
	});

};