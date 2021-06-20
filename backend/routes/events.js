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

router.route('/up').get(async (req, res) => {
	const PAGE_SIZE = 20;
	const page = parseInt(req.query.page || "0");
	const total = await Event.countDocuments({subcategory: "Upcoming"});
	await Event.find({subcategory: "Upcoming"}).limit(PAGE_SIZE).skip(PAGE_SIZE * page)
		.then(events => res.json({totalPages: Math.ceil(total / PAGE_SIZE),events}))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/ar').get(async (req, res) => {
	const PAGE_SIZE = 20;
	const page = parseInt(req.query.page || "0");
	const total = await Event.countDocuments({subcategory: "Archived"});
	await Event.find({subcategory: "Archived"}).limit(PAGE_SIZE).skip(PAGE_SIZE * page)
		.then(events => res.json({totalPages: Math.ceil(total / PAGE_SIZE),events}))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/fav').get(async (req, res) => {
	const PAGE_SIZE = 20;
	const page = parseInt(req.query.page || "0");
	const total = await Event.countDocuments({subcategory: "All Time Favorites"});
	await Event.find({subcategory: "All Time Favorites"}).limit(PAGE_SIZE).skip(PAGE_SIZE * page)
		.then(events => res.json({totalPages: Math.ceil(total / PAGE_SIZE),events}))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/coding/up').get(async (req, res) => {
	const PAGE_SIZE = 20;
	const page = parseInt(req.query.page || "0");
	const total = await Event.countDocuments({category: "Coding Events", subcategory: "Upcoming"});
	await Event.find({category: "Coding Events", subcategory: "Upcoming"})
		.then(events => res.json({totalPages: Math.ceil(total / PAGE_SIZE),events}))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/coding/ar').get(async (req, res) => {
	const PAGE_SIZE = 20;
	const page = parseInt(req.query.page || "0");
	const total = await Event.countDocuments({category: "Coding Events", subcategory: "Archived"});
	await Event.find({category: "Coding Events", subcategory: "Archived"})
		.then(events => res.json({totalPages: Math.ceil(total / PAGE_SIZE),events}))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/coding/fav').get(async (req, res) => {
	const PAGE_SIZE = 20;
	const page = parseInt(req.query.page || "0");
	const total = await Event.countDocuments({category: "Coding Events", subcategory: "All Time Favorites"});
	await Event.find({category: "Coding Events", subcategory: "All Time Favorites"})
		.then(events => res.json({totalPages: Math.ceil(total / PAGE_SIZE),events}))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/webinar/up').get(async (req, res) => {
	const PAGE_SIZE = 20;
	const page = parseInt(req.query.page || "0");
	const total = await Event.countDocuments({category: "Webinars", subcategory: "Upcoming"});
	await Event.find({category: "Webinars", subcategory: "Upcoming"})
		.then(events => res.json(events))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/webinar/ar').get(async (req, res) => {
	const PAGE_SIZE = 20;
	const page = parseInt(req.query.page || "0");
	const total = await Event.countDocuments({category: "Webinars", subcategory: "Archived"});
	await Event.find({category: "Webinars", subcategory: "Archived"})
		.then(events => res.json(events))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/webinar/fav').get(async (req, res) => {
	const PAGE_SIZE = 20;
	const page = parseInt(req.query.page || "0");
	const total = await Event.countDocuments({category: "Webinars", subcategory: "All Time Favorites"});
	await Event.find({category: "Webinars", subcategory: "All Time Favorites"})
		.then(events => res.json(events))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/bootcamp/up').get(async (req, res) => {
	const PAGE_SIZE = 20;
	const page = parseInt(req.query.page || "0");
	const total = await Event.countDocuments({category: "Bootcamp Events", subcategory: "Upcoming"});
	await Event.find({category: "Bootcamp Events", subcategory: "Upcoming"})
		.then(events => res.json(events))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/bootcamp/ar').get(async (req, res) => {
	const PAGE_SIZE = 20;
	const page = parseInt(req.query.page || "0");
	const total = await Event.countDocuments({category: "Bootcamp Events", subcategory: "Archived"});
	await Event.find({category: "Bootcamp Events", subcategory: "Archived"})
		.then(events => res.json(events))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/bootcamp/fav').get(async (req, res) => {
	const PAGE_SIZE = 20;
	const page = parseInt(req.query.page || "0");
	const total = await Event.countDocuments({category: "Bootcamp Events", subcategory: "All Time Favorites"});
	await Event.find({category: "Bootcamp Events", subcategory: "All Time Favorites"})
		.then(events => res.json(events))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/workshop/up').get(async (req, res) => {
	const PAGE_SIZE = 20;
	const page = parseInt(req.query.page || "0");
	const total = await Event.countDocuments({category: "Workshops", subcategory: "Upcoming"});
	await Event.find({category: "Workshops", subcategory: "Upcoming"})
		.then(events => res.json(events))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/workshop/ar').get(async (req, res) => {
	const PAGE_SIZE = 20;
	const page = parseInt(req.query.page || "0");
	const total = await Event.countDocuments({category: "Workshops", subcategory: "Archived"});
	await Event.find({category: "Workshops", subcategory: "Archived"})
		.then(events => res.json(events))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/workshop/fav').get(async (req, res) => {
	const PAGE_SIZE = 20;
	const page = parseInt(req.query.page || "0");
	const total = await Event.countDocuments({category: "Workshops", subcategory: "All Time Favorites"});
	await Event.find({category: "Workshops", subcategory: "All Time Favorites"})
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