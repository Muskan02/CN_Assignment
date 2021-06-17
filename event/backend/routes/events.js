const router = require('express').Router();
let Event = require('../models/event.model');
const multer = require('multer')

const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, './uploads/');
	},
	filename: (req, file, callback) => {
		callback(null, Date.now() + '-' + file.originalname);
	}
});

const upload = multer({storage: storage});

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

router.route('/add').post(upload.single("photo"),(req, res) => {
	console.log("yee",req.body.tags);
	const name = req.body.name;
	const description = req.body.description;
	const photo = req.file.path;
	const fee = Number(req.body.fee);
	const startdate = Date.parse(req.body.startdate);
	const venue = req.body.venue;
	const tags = req.body.tags.split(',')
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
	console.log(newEvent);
	newEvent.save()
	.then(() => res.json('Event Created!'))
	.catch(err => {res.status(400).json('Error: ' + err)
console.log(err)});
});

module.exports = router;