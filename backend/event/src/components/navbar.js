import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <header className="text-yellow-600 body-font shadow-2xl filter drop-shadow-2xl">
      <div className="container mx-auto flex flex-wrap p-1/2 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-yellow-900 mb-2 md:mb-0">
          <img src="https://www.codingninjas.com/assets-landing/images/CNLOGO.svg" alt="Coding Ninjas" style={{
            height: "75px",
            width: "75px"
            }}/>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-black text-base justify-center">
          <span className="mr-5 hover:text-black-900">Home</span>
          <span className="mr-5 hover:text-black-900">Courses</span>
          <span className="mr-5 hover:text-black-900">Practice</span>
          <span className="mr-5 hover:text-black-900">Events</span>
        </nav>
        <button className="inline-flex items-center bg-yellow-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-yellow-600 rounded text-base md:mt-0">Login
        </button>
      </div>
    </header>
      );
  }
}

