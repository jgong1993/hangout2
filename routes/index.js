var acc = require("../acc.json");

exports.viewIndex = function(req, res){
	var numUsers = Object.keys(acc.login).length;
	res.render('index', acc);

	var email = acc.login[0].email;
	var password = acc.password;
	console.log(email + "  " + password);

	getObjects(acc,"email","a");
	function getObjects(obj, key, val) {
	    var objects = [];
	    for (var i in obj) {
	        if (!obj.hasOwnProperty(i)) continue;
	        if (typeof obj[i] == 'object') {
	            objects = objects.concat(getObjects(obj[i], key, val));
	        } else if (i == key && obj[key] == val) {
	            objects.push(obj);
	        }
	    }
	    return objects;
	}
};
