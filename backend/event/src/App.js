import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Header from "./components/header";
import Tab from "./components/tab";
import EventList from "./components/event-list.component";
import Form from "./components/form";
import Card from "./components/card";

function App() {
  return (
    <Router>
      <Navbar/>
      <Header/>
      <Tab/>
      <Route path='/add' exact component={Form} />
    </Router>
  );
}

export default App;
