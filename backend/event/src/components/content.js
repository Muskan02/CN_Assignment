import React, { Component } from 'react';
import Card from "./card";
import Tags from "./tags";

export default class Cards extends Component {
	render() {
		return (
			<>
			<div className='rowC' style={{display:"flex", flexDirection:"row"}}>
	            <Card events={this.props.events}/>
	            
	            <Tags />
	        </div>
	       
	         </>
			)
	}
}