var login = require("../login.json");
var eventTest = require("../eventTest.json");

exports.register = function(req, res) {    

	var email = req.query.emailSign;
	var pw = req.query.passwordSign;
	var pw2 = req.query.passwordSign2;
	console.log("email: " +email);
	console.log("pw: " +pw);
	console.log("pw2: " +pw2);
	var flag = true;

	for(var i = 0; i < login["login"].length; i++) {
		if(login["login"][i].email == email) {
			console.log("GOES HERE");
			res.render('index', {"note": "Registering failed. Email already exists!"});
			flag = false;
			break;
		}
	}

	if(flag) {
		if(pw == pw2) {

			res.render('homepage');
			var obj = { "email": email, "password": pw }
			login["login"].push(obj);
			console.log(login["login"]);
		}
		else {
			res.render('index', {"note": "Registering failed. Passwords don't match!"});
		}
	}

	flag = true;
 };

exports.login = function(req,res) {

	var email = req.query.email;
	var pw = req.query.password;
	console.log("email: " +email);
	console.log("pw: " +pw);

	for(var i = 0; i < login["login"].length; i++) {
		if(login["login"][i].email == email) {

			if(login["login"][i].password == pw) {
				// res.render('homepage',eventTest);
				res.redirect('homepage');
			}
			else {
				res.render('index', {"note": "Login failed. Incorrect Password!"});
			}
		}
		else {
			res.render('index', {"note": "Loging failed. Email Not Found!"});
		}
	}

};

