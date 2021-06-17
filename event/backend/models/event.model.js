const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categoryOptions = ["Coding Events", "Webinars", "Bootcamp Events", "Workshops"];

const eventSchema = new Schema({
	name : {type: String, required: true},
	description : {type: String, required: true},
	photo : {type: String, required: true},
	fee : {type: Number, required: true},
	startdate : {type: Date, required: true},
	venue : {type: String, required: true},
	tags : {type: [String], index: true, required: true},
	category: {type: String, enum: categoryOptions, required: true},
	fav: {type: Boolean, required: true},
},   {
	timesamps: true,
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;