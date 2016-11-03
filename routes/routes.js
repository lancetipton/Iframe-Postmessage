
module.exports = function(app, __dirname) { 

	// Landing page route:
	app.get('/', function(req, res){
	  res.sendFile(__dirname + '/views/index.html');
	});

	app.get('/iframe', function(req, res){
	  res.sendFile(__dirname + '/views/iframe.html');
	});

}