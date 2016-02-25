var images = require("../images.json");
var eventTest = require("../eventTest.json");

exports.home = function(req, res){
	//console.log(data);
	res.render('homepage', images);
};

exports.home = function(req, res){
	//console.log(data);
	res.render('homepage', eventTest);
};