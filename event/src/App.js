import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import EventList from "./components/event-list.component";

function App() {
  return (
    <Router>
      <Route path="/" exact component={EventList} />
    </Router>
  );
}

export default App;
