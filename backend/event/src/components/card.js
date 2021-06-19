import React, { Component } from 'react';
import { FaCalendarAlt, FaLocationArrow, FaMoneyBillAlt } from "react-icons/fa";



export default class Cards extends Component {
	render() {
		if(this.props.events.length){
		return (
			<div class="container my-12 mx-auto px-4 md:px-12">
				<div class="flex flex-wrap -mx-1 lg:-mx-4">
				{
					this.props.events.map((event,index)=>{
						return(
							
						        <div className="my-1 px-1 w-full lg:my-4 lg:px-4 lg:w-1/3" key={event.id}>
						            <article className="bg-white rounded-lg shadow-lg max-w-xs mx-auto lg:mx-0 flex-grow">						             
						                <img alt="Placeholder" className="block h-auto w-full" src={"https://cn-events.herokuapp.com/" + event.photo}/>					
						                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
						                <h1 className="text-lg">
						                        <p className="no-underline text-black" href="#">
						                            <b>{event.name}</b>
						                        </p>
						                    </h1>
						                </header>
						                <header className="flex items-center justify-between leading-tight p-1 md:p-2">
						                    <p className="text-sm" style={{
											          display: "flex",
											          justifyContent: "center",
											          alignItems: "center"
											        }}>
						                        <span className="p-1"><FaCalendarAlt /></span> { new Date(event.startdate).toLocaleDateString('en-GB')}
						                    </p>
						                    <p className="text-sm" style={{
											          display: "flex",
											          justifyContent: "center",
											          alignItems: "center"
											        }}>
											    <span className="p-1"><FaMoneyBillAlt /> </span>{event.fee===0?<>FREE</>:<>INR {event.fee}</>}</p>
						                    <p className="text-sm" style={{
											          display: "flex",
											          justifyContent: "center",
											          alignItems: "center"
											        }}>
											     <span className="p-1"><FaLocationArrow /></span> {event.venue}</p>
						                </header>
						                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
						                    <span className="flex items-center no-underline text-black" href="#">						                       
						                        <p className="ml-2 text-sm">
						                            {event.description}
						                        </p>
						                    </span>
						                </footer>
						                <footer className="flex leading-none p-2 md:p-4">
											{
											event.tags.map((tag,ind)=>{
												return(
													<p className="glowing-border p-1/2 m-1 text-sm">{tag}</p>
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
	else
		{
			return(
				<h2 align="center">NO EVENT FOUND</h2>
				)
		}
	}
}