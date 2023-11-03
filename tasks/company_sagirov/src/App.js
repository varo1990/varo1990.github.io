import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Technology from "./pages/Technology";
import FlightSchedule from "./pages/FlightSchedule";
import Guarantees from "./pages/Guarantees";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

function App(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/technology" element={<Technology />}/>
          <Route path="/flightSchedule" element={<FlightSchedule />}/>
          <Route path="/guarantees" element={<Guarantees />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contacts" element={<Contacts />}/>


          <Route path="/not-found" element={<NotFound />}/>
          <Route path="*" element={<Navigate to="not-found"/>}/>

        </Routes>
      </BrowserRouter></div>
  );
}

export default App;