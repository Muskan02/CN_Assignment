import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Header from "./components/header";
import Tab from "./components/tab";
import Form from "./components/form";

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
