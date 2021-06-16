const router = require('express').Router();
let Event = require('../models/event.model');

router.route('/').get((req, res) => {
	Event.find()
		.then(events => res.json(events))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/coding').get((req, res) => {
	Event.find({category: "Coding Events"})
		.then(events => res.json(events))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/webinar').get((req, res) => {
	Event.find({category: "Webinars"})
		.then(events => res.json(events))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/bootcamp').get((req, res) => {
	Event.find({category: "Bootcamp Events"})
		.then(events => res.json(events))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/workshop').get((req, res) => {
	Event.find({category: "Workshops"})
		.then(events => res.json(events))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	const name = req.body.name;
	const description = req.body.description;
	const photo = req.body.photo;
	const fee = Number(req.body.fee);
	const startdate = Date.parse(req.body.startdate);
	const venue = req.body.venue;
	const tags = req.body.tags.replace(/\s/g, '').split(",");
	const category = req.body.category;
	const fav = req.body.fav;

	const newEvent = new Event({
		name,
		description,
		photo,
		fee,
		startdate,
		venue,
		tags,
		category,
		fav,
	});

	newEvent.save()
	.then(() => res.json('Event Created!'))
	.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;