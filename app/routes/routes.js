'use strict';

module.exports = function(app) {

	app.get('/', function(req, res) {
		res.render('index.html');
	});

	app.get('/places', function(req, res) {
		var request = require('request');

		request('https://spreadsheets.google.com/feeds/list/1n5OTsDtiKS39NUgeDtl_zCYn6YgYwoqT2tLbgwNhHWw/od6/public/values?alt=json-in-script', function (error, response, body) {
		  if (!error && response.statusCode == 200) {
		  	res.send(body);
		  }
		})
		
	})




};