import React, { useState, createContext } from "react";

import './css/landing.css'

import Navbar from './components/Special-Pages/Navbar';
import MainLanding from './components/Special-Pages/MainLanding';
import DesignStyles from "./components/Special-Pages/DesignStyles";


export const AppContext = createContext();

function App() {
  const [toggleBurger, setToggleBurger] = useState(false)

  return (
    <div className="App" >
      <AppContext.Provider
        value={{ toggleBurger, setToggleBurger }} >

        <Navbar />
        {/* <MainLanding /> */}
        <DesignStyles />


      </AppContext.Provider>
    </div>
  );
}

export default App;

