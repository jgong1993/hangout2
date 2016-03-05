var eventTest = require("../eventTest.json");

exports.addNewEvent = function(req, res) {    
		// var origName = req.query.group;
		 var orig = eventTest.groups2[eventTest.groups2.length-1].id;
		 var neworig = orig.slice(1,orig.length);
		 var newvar = 'e' + (parseInt(neworig) +1);
		 
		 var newWhen = req.query.when;
		 if( newWhen == ''){
		 	newWhen = 'No date, yo';
		 }
		 var going = '';
		 for(var i = 0; i < eventTest.groups2.length; i++) {
		 	if(eventTest["groups2"][i].group == req.query.group) {
		 		going = eventTest["groups2"][i].whoisgoing;
		 		break;
		 	}
		 }
		 eventTest['groups2'].push({
		 	id: newvar,
		 	title: req.query.title,
		 	group: req.query.group,
		 	when: newWhen,
		 	whoisgoing : going,
		 	start: '',
		 	end: '',
		 	imageURL: []
		 });
		// for(var i = 0; i < eventTest.groups2.length; i++) {
  // 			  if(eventTest["groups2"][i].group == origName) {
  //   				//var newTarget = "{\"image\" : \"./uploads/"+req.file.originalname+"\"}";
  //   				eventTest["groups2"][i]["imageURL"].push(JSON.parse(newTarget));
  //   				break;
  // 			  }
  // 		  }
		// suggested_events['suggested_events'].push({
		// 	title: req.query.title,
		// 	group: req.query.group,
		// 	when: req.query.when
		// });
		//res.render('upcomingEvents',  {"note": "Group Successfully Added!", eventTest});
		res.render('upcomingEvents', eventTest);
 }