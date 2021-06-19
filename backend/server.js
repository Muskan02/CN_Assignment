const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'))

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
	console.log('MongoDB connection established successfully');
});

const eventsRouter = require('./routes/events');

app.use('/events', eventsRouter);

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'event', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'event', 'build', 'index.html'))
  });

}



app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});