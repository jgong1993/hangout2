var login = require("../login.json");
var images = require("../images.json");

exports.register = function(req, res) {    

	var email = req.query.emailSign;
	var pw = req.query.passwordSign;
	var pw2 = req.query.password2Sign;
	console.log("email: " +email);
	console.log("pw: " +pw);
	console.log("pw2: " +pw2);

	for(var i = 0; i < login.login.length; i++) {
		if(login["login"][i].email == email) {
			console.log("GOES HERE");
			res.render('index', {"note": "Email already exists!"});
			break;
		}
	}

	if(pw === pw2) {

		res.render('homepage',images);

		var obj = { "email": email, "password": pw }
		login["login"].push(obj);
		console.log(login);
	}
	else {
		res.render('index', {"note": "Passwords don't match!"});
	}
	
 };

exports.login = function(req,res) {

	var email = req.query.email;
	var pw = req.query.password;
	console.log("email: " +email);
	console.log("pw: " +pw);

	for(var i = 0; i < login.login.length; i++) {
		if(login["login"][i].email == email) {

			if(login["login"][i].password == pw) {
				res.render('homepage',images);
			}
			else {
				res.render('index', {"note": "Incorrect Password!"});
			}
		}
		else {
			res.render('index', {"note": "Email Not Found!"});
		}
	}

};







