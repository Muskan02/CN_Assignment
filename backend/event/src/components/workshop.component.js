import React, { Component } from 'react';
import Card from "./card";



export default class WorkshopList extends Component {
	constructor(props) {
		super(props);

		this.state = {events: []};
	}

	componentDidMount() {
    if(this.props.name==="up")
      {
      fetch('https://cn-events.herokuapp.com/events/workshop/up')
      .then(response => response.json())
      .then(events=>{
        this.setState({events:events});
        console.log(this.state.events);
      })
      .catch((err)=>(console.log(err)))
     }
     else if(this.props.name==="ar")
      {
      fetch('https://cn-events.herokuapp.com/events/workshop/ar')
      .then(response => response.json())
      .then(events=>{
        this.setState({events:events});
        console.log(this.state.events);
      })
      .catch((err)=>(console.log(err)))
     }
     else if(this.props.name==="fav")
      {
      fetch('https://cn-events.herokuapp.com/events/workshop/fav')
      .then(response => response.json())
      .then(events=>{
        this.setState({events:events});
        console.log(this.state.events);
      })
      .catch((err)=>(console.log(err)))
     }
   }

	render() {
		return(
			<Card events={this.state.events}/>
			)
	}
}