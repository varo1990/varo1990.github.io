import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Services from "./pages/Services";
import Cases from "./pages/Cases";
import Certificates from "./pages/Certificates";
import Widgets from "./pages/Widgets";
import Integrations from "./pages/Integrations";

function App(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/cases" element={<Cases />}/>
          <Route path="/certificates" element={<Certificates />}/>
          <Route path="/widgets" element={<Widgets />}/>
          <Route path="/integrations" element={<Integrations />}/>

          
          <Route path="/not-found" element={<Notfound />}/>
          <Route path="*" element={<Navigate to="not-found"/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;