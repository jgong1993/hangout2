
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var addGroup = require('./routes/addGroup');
var events = require('./routes/events');
var gallery = require('./routes/gallery');
var groups = require('./routes/groups');
var homepage = require('./routes/homepage');
var indivGroup = require('./routes/indivGroup');
var index = require('./routes/index')
var login = require('./routes/login');
var viewEvent = require('./routes/viewEvent');
var planEvent = require('./routes/planEvent');
var planEventResult = require('./routes/planEventResult');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here

app.get('/', index.viewIndex);
app.get('/addGroup', addGroup.addNewGroup);
app.get('/editGroup', indivGroup.editGroup);
app.get('/gallery', gallery.viewGallery);
app.get('/gallery/:groupName', gallery.viewGroupGallery);
app.get('/group/:name', indivGroup.thisGroup);
app.get('/homepage', homepage.home);
app.get('/homepage2', login.login);
app.get('/pastEvents/:groupName', events.viewGroupsPastEvents);
app.get('/planEvent', planEvent.planEventView);
app.get('/planEventResult', planEventResult.addNewEvent);
app.get('/register', login.register);
app.get('/upcomingEvents', events.viewEvents);
app.get('/upcomingEvents/:groupName', events.viewGroupsEvents);
app.get('/viewEvent/:title', viewEvent.viewThisEvent);
app.get('/viewGroups', groups.viewGroups);
app.get('/viewGroups/:groupName', indivGroup.leaveGroup);

app.post('/pushImage', gallery.addPhoto);
app.post('/pushImage2', gallery.addPhoto2);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
