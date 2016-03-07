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
exports.viewGroupGallery = function(req, res){
  var groupName = req.params.groupName; 
  var date = "";
  var imageURLArr = [];
  
  var events_array = [];
  var event_detail = {};
  var indivGallery;

  var len = eventTest.groups2.length;
  var i = 0;
  for( ; i < len; i++) {
    if(eventTest.groups2[i].group == groupName) {
      title   = eventTest.groups2[i].title;
      date    = eventTest.groups2[i].when;
      for(var j = 0; j < eventTest.groups2[i].imageURL.length; j++){
        imageURLArr.push({image : "/"+eventTest.groups2[i].imageURL[j].image});
      }
      
      event_detail = {
        "title": eventTest.groups2[i].title, 
        'when': eventTest.groups2[i].when, 
        'imageURL': imageURLArr,
        'id': eventTest.groups2[i].id,
        'group': groupName 
      }
      //console.log(event_detail);

      events_array.push(event_detail); 
      indivGallery = {'indivGallery': events_array};
      //console.log(indivGallery);
      imageURLArr = [];
    }
    else {
      console.log("Couldn't initialize event fields from json!");
    }
  } 
  res.render('groupGallery', indivGallery);
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

exports.addPhoto2 = function(req,res){
   upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file." + err);
        }
        var origName = req.body.group;
        for(var i = 0; i < eventTest.groups2.length; i++) {
          //console.log(origName);
          //console.log(eventTest["groups2"][i].title);
          //console.log("==");
          if(eventTest["groups2"][i].title == origName) {
            var newTarget = "{\"image\" : \"./uploads/"+req.file.originalname+"\"}";
            eventTest["groups2"][i]["imageURL"].push(JSON.parse(newTarget));
            break;
          }
        }       
          var groupName = req.body.group; 
          var date = "";
          var imageURLArr = [];
          
          var events_array = [];
          var event_detail = {};
          var indivGallery;
          var len = eventTest.groups2.length;
          var i = 0;
          //console.log("input is  " + groupName);
          //console.log("we is "+ eventTest.groups2[i].title);
          for( ; i < len; i++) {
            if(eventTest.groups2[i].title == groupName) {
              title   = eventTest.groups2[i].title;
              date    = eventTest.groups2[i].when;
              for(var j = 0; j < eventTest.groups2[i].imageURL.length; j++){
                imageURLArr.push({image : "/"+eventTest.groups2[i].imageURL[j].image});
              }
              
              event_detail = {
                "title": eventTest.groups2[i].title, 
                'when': eventTest.groups2[i].when, 
                'imageURL': imageURLArr,
                'id': eventTest.groups2[i].id,
                'group': groupName 
              }
              //console.log(event_detail);

              events_array.push(event_detail); 
              indivGallery = {'indivGallery': events_array};
              //console.log("wat: " + indivGallery);
              imageURLArr = [];
            }
            else {
              console.log("Couldn't initialize event fields from json!");
            }
          } 
        res.render('groupGallery', indivGallery);
    });
};
