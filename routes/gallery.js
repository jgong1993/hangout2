var eventTest = require("../public/json/eventTest.json");

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
            return res.end("Error uploading file." + err);
        }
        var origName = req.body.group;
        for(var i = 0; i < eventTest.groups2.length; i++) {
          console.log(origName);
          console.log(eventTest["groups2"][i].title);
          console.log("==");
  			  if(eventTest["groups2"][i].title == origName) {
    				var newTarget = "{\"image\" : \"./uploads/"+req.file.originalname+"\"}";
    				eventTest["groups2"][i]["imageURL"].push(JSON.parse(newTarget));
    				break;
  			  }
  		  }       
		    res.redirect('gallery'); 
    });
};