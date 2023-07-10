import React, { useState, createContext } from "react";

import LandingPage from './components/Special-Pages/LandingPage';

export const AppContext = createContext();

function App() {
  const [toggleBurger, setToggleBurger] = useState(false)

  return (
    <div className="App" >
      <AppContext.Provider
        value={{ toggleBurger, setToggleBurger }} >

        <LandingPage />

      </AppContext.Provider>

    </div>
  );
}

export default App;

