var profile = require("../profileimage.json");

exports.viewGallery = function(req, res){
	//console.log(data);
	res.render('gallery', profile);
};