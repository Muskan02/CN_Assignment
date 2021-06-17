import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaLocationArrow, FaMoneyBillAlt } from "react-icons/fa";



export default class EventList extends Component {
	constructor(props) {
		super(props);

		this.state = {events: []};
	}

	componentDidMount() {
		fetch('http://localhost:9000/events/')
		.then(response => response.json())
		.then(events=>{
			this.setState({events:events});
			console.log(this.state.events);
		})
		.catch((err)=>(console.log(err)))
	}

	render() {
		return (
			<div class="container my-12 mx-auto px-4 md:px-12">
				<div class="flex flex-wrap -mx-1 lg:-mx-4">
				{
					this.state.events.map((event,index)=>{
						return(
							
						        <div className="my-1 px-1 w-full lg:my-4 lg:px-4 lg:w-1/3">
						            <article className="bg-white rounded-lg shadow-lg max-w-xs mx-auto lg:mx-0 flex-grow">						             
						                <img alt="Placeholder" className="block h-auto w-full" src={"http://localhost:9000/" + event.photo}/>					
						                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
						                <h1 className="text-lg">
						                        <a className="no-underline hover:underline text-black" href="#">
						                            <b>{event.name}</b>
						                        </a>
						                    </h1>
						                </header>
						                <header className="flex items-center justify-between leading-tight p-1 md:p-2">
						                    <p style={{
											          display: "flex",
											          justifyContent: "center",
											          alignItems: "center"
											        }}>
						                        <span className="p-1"><FaCalendarAlt /></span> { new Date(event.startdate).toLocaleDateString()}
						                    </p>
						                    <p style={{
											          display: "flex",
											          justifyContent: "center",
											          alignItems: "center"
											        }}>
											    <span className="p-1"><FaMoneyBillAlt /> </span>{event.fee}</p>
						                    <p style={{
											          display: "flex",
											          justifyContent: "center",
											          alignItems: "center"
											        }}>
											     <span className="p-1"><FaLocationArrow /></span> {event.venue}</p>
						                </header>
						                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
						                    <a className="flex items-center no-underline hover:underline text-black" href="#">						                       
						                        <p className="ml-2 text-sm">
						                            {event.description}
						                        </p>
						                    </a>
						                </footer>
						                <footer className="flex leading-none p-2 md:p-4">
											{
											event.tags.map((tag,ind)=>{
												return(
													<p className="glowing-border p-1 m-1">{tag}</p>
													);
													})

											}
										</footer>
						           
						            </article>
						        </div>	
							);
						})
					}
					</div>	
			</div>
		);
	}
}