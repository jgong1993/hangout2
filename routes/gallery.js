var profile = require("../profileimage.json");
var eventTest = require("../eventTest.json");

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
	res.render('gallery', eventTest);
};

exports.addPhoto = function(req,res){
	 upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
      //   var origName = req.body.group;
      //   for(var i = 0; i < eventTest.groups2.length; i++) {
  			 //  if(eventTest["groups2"][i].group == origName) {
    		// 		var newTarget = "{\"image\" : \"./uploads/"+req.file.originalname+"\"}";
    		// 		eventTest["groups2"][i]["imageURL"].push(JSON.parse(newTarget));
    		// 		break;
  			 //  }
  		  // }       
		    res.redirect('gallery'); 
    });
};