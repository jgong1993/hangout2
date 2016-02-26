var profile = require("../profileimage.json");

var multer = require('multer');
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './public/uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  }
});

var upload = multer({ storage : storage}).single('userPhoto');


exports.viewGallery = function(req, res){
	res.render('gallery', profile);
};

exports.addPhoto = function(req,res){
	 upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        var origName = req.body.group;
        for(var i = 0; i < profile.profile.length; i++) {
  			  if(profile["profile"][i].group == origName) {
    				var newTarget = "{\"image\" : \"./uploads/"+req.file.originalname+"\"}";
    				profile["profile"][i]["imageURL"].push(JSON.parse(newTarget));
    				break;
  			  }
  		  }       
		    res.redirect('gallery'); 
    });
};