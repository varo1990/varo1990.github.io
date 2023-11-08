import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/notFound";

function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}/>

        <Route path="/home" element={<Home />}/>




        <Route path="/not-found" element={<NotFound />}/>
        <Route path="*" element={<Navigate to="not-found"/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;