import React, { useState, useEffect} from 'react';
import Content from "./content";



function WebinarList (props) {
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [events, setEvents ] = useState([]);
  const pages = new Array(numberOfPages).fill(null).map((v,i) => i);

  useEffect(() => {
    if(props.name==="up")
      {
      fetch(`https://cn-events.herokuapp.com/events/webinar/up?page=${pageNumber}`)
      .then(response => response.json())
      .then(({totalPages, events})=>{
        setEvents(events);
        setNumberOfPages(totalPages);
      })
      .catch((err)=>(console.log(err)))
     }
     else if(props.name==="ar")
      {
      fetch(`https://cn-events.herokuapp.com/events/webinar/ar?page=${pageNumber}`)
      .then(response => response.json())
      .then(({totalPages, events})=>{
        setEvents(events);
        setNumberOfPages(totalPages);
      })
      .catch((err)=>(console.log(err)))
     }
     else if(props.name==="fav")
      {
      fetch(`https://cn-events.herokuapp.com/events/webinar/fav?page=${pageNumber}`)
      .then(response => response.json())
      .then(({totalPages, events})=>{
        setEvents(events);
        setNumberOfPages(totalPages);
      })
      .catch((err)=>(console.log(err)))
     }
   }, [pageNumber]);

  return(
    <>
      <Content events={events} pages={pages}/>
        {
          pages.map((pageIndex, index) => {
            return(
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 m-2 md:justify-center rounded" key={index} onClick={() => setPageNumber(pageIndex)}>{pageIndex + 1}</button>
            );
          })
        }
      </>
      )
}

export default WebinarList