var eventTest = require("../eventTest.json");

exports.home = function(req, res){
	//console.log(data);
	res.render('homepage', eventTest);
};