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

router.route('/up').get((req, res) => {
	Event.find({subcategory: "Upcoming"})
		.then(events => res.json(events))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/ar').get((req, res) => {
	Event.find({subcategory: "Archived"})
		.then(events => res.json(events))
		.catch(err => res.status(400).json('Error: ' + err));
});


router.route('/fav').get((req, res) => {
	Event.find({subcategory: "All Time Favorites"})
		.then(events => res.json(events))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/coding/up').get((req, res) => {
	Event.find({category: "Coding Events", subcategory: "Upcoming"})
		.then(events => res.json(events))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/coding/ar').get((req, res) => {
	Event.find({category: "Coding Events", subcategory: "Archived"})
		.then(events => res.json(events))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/coding/fav').get((req, res) => {
	Event.find({category: "Coding Events", subcategory: "All Time Favorites"})
		.then(events => res.json(events))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/webinar/up').get((req, res) => {
	Event.find({category: "Webinars", subcategory: "Upcoming"})
		.then(events => res.json(events))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/webinar/ar').get((req, res) => {
	Event.find({category: "Webinars", subcategory: "Archived"})
		.then(events => res.json(events))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/webinar/fav').get((req, res) => {
	Event.find({category: "Webinars", subcategory: "All Time Favorites"})
		.then(events => res.json(events))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/bootcamp/up').get((req, res) => {
	Event.find({category: "Bootcamp Events", subcategory: "Upcoming"})
		.then(events => res.json(events))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/bootcamp/ar').get((req, res) => {
	Event.find({category: "Bootcamp Events", subcategory: "Archived"})
		.then(events => res.json(events))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/bootcamp/fav').get((req, res) => {
	Event.find({category: "Bootcamp Events", subcategory: "All Time Favorites"})
		.then(events => res.json(events))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/workshop/up').get((req, res) => {
	Event.find({category: "Workshops", subcategory: "Upcoming"})
		.then(events => res.json(events))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/workshop/ar').get((req, res) => {
	Event.find({category: "Workshops", subcategory: "Archived"})
		.then(events => res.json(events))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/workshop/fav').get((req, res) => {
	Event.find({category: "Workshops", subcategory: "All Time Favorites"})
		.then(events => res.json(events))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post(upload.single("photo"),(req, res) => {
	const name = req.body.name;
	const description = req.body.description;
	const photo = req.file.path;
	const fee = Number(req.body.fee);
	const startdate = Date.parse(req.body.startdate);
	const venue = req.body.venue;
	const tags = req.body.tags.split(',')
	const category = req.body.category;
	const subcategory = req.body.subcategory;
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
		subcategory,
		fav,
	});
	console.log(newEvent);
	newEvent.save()
	.then(() => res.json('Event Created!'))
	.catch(err => {res.status(400).json('Error: ' + err)
console.log(err)});
});

module.exports = router;