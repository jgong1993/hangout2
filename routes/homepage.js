var eventTest = require("../public/json/eventTest.json");

exports.home = function(req, res){
	//console.log(data);
	res.render('homepage', eventTest);
};