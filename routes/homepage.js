var images = require("../images.json");

exports.home = function(req, res){
	//console.log(data);
	res.render('homepage', images);
};
