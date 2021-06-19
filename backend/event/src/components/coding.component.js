import React, { Component } from 'react';
import Content from "./content";



export default class CodingList extends Component {
	constructor(props) {
		super(props);

		this.state = {events: []};
	}

	componentDidMount() {
    if(this.props.name==="up")
      {
      fetch('https://cn-events.herokuapp.com/events/coding/up')
      .then(response => response.json())
      .then(events=>{
        this.setState({events:events});
      })
      .catch((err)=>(console.log(err)))
     }
     else if(this.props.name==="ar")
      {
      fetch('https://cn-events.herokuapp.com/events/coding/ar')
      .then(response => response.json())
      .then(events=>{
        this.setState({events:events});
      })
      .catch((err)=>(console.log(err)))
     }
     else if(this.props.name==="fav")
      {
      fetch('https://cn-events.herokuapp.com/events/coding/fav')
      .then(response => response.json())
      .then(events=>{
        this.setState({events:events});
      })
      .catch((err)=>(console.log(err)))
     }
   }

	render() {
		return(
			<Content events={this.state.events}/>
			)
	}
}