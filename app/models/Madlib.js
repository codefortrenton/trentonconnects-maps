// grab the mongoose module
var mongoose = require('mongoose');

// define our model

var MadlibSchema = new mongoose.Schema({
	animal: {type : String, default: ''},
	object: {type : String, default: ''},
	verb: {type : String, default: ''},
	adverb: {type : String, default: ''},
	updated_at: { type: Date, default: Date.now },
});

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Madlib', MadlibSchema);
