import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Event = props => {
	<div>
		<p>{props.event.name}</p>
		<p>{props.event.description}</p>
		<p>{props.event.photo}</p>
		<p>{props.event.fee}</p>
		<p>{props.event.startdate.substring(1,10)}</p>
		<p>{props.event.venue}</p>
		<p>{props.event.tags}</p>
		<p>{props.event.category}</p>
		<p>{props.event.fav}</p>
	</div>
}

export default class EventList extends Component {
	constructor(props) {
		super(props);

		this.state = {events: []};
	}

	eventList() {
		return this.state.events.map(currevent => {
			return <Event event={currevent} key={currevent._id}/>
		});
	}

	componentDidMount() {
		axios.get('http://localhost:9000/events/')
		.then(response => {
			console.log(response.data);
			this.setState({events: response.data});
		})
		.catch((error) => {
			console.log(error);
		}) 
	}

	render() {
		return (
			<h1>Events: {this.eventList()}</h1>
		);
	}
}