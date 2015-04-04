var Nerd = require('./models/Nerd');
var Madlib = require('./models/Madlib');

module.exports = function(app) {

	// server routes ==========================================================
	// handle things like api calls
	// authentication routes
	
		// api ---------------------------------------------------------------------
	// get all todos
	app.get('/api/madlib', function(req, res) {

		// use mongoose to get all todos in the database
		Madlib.find(function(err, madlibs) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(madlibs); // return all todos in JSON format
		});
	});

	// create todo and send back all todos after creation
	app.post('/api/madlib', function(req, res) {

		// create a todo, information comes from AJAX request from Angular
		Madlib.create({
			animal: req.body.animal,
			object: req.body.object, 
			verb: req.body.verb,
			adverb: req.body.adverb,
		}, function(err, madlib) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			Madlib.find(function(err, madlibs) {
				if (err)
					res.send(err)
				res.json(madlibs);
			});
		});

	});

	// delete a todo
	app.delete('/api/madlib/:madlib_id', function(req, res) {
		Madlib.remove({
			_id : req.params.madlib_id
		}, function(err, todo) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			Madlib.find(function(err, madlibs) {
				if (err)
					res.send(err)
				res.json(madlibs);
			});
		});
	});

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html'); 
	});

};