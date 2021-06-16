import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import EventList from "./components/event-list.component";
import Form from "./components/form";

function App() {
  return (
    <Router>
      <Route path="/" exact component={EventList} />
      <Route path='/add' exact component={Form} />
    </Router>
  );
}

export default App;
