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
						                <a href="#">
						                    <img alt="Placeholder" className="block h-auto w-full" src="data:image/jpeg;base64,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"/>
						                </a>
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