var app = require('./config/express')();

app.set('port', (process.env.PORT || 8081));

app.listen(app.get('port'), function() {
	console.log("Listening on port " + app.get('port'));
})