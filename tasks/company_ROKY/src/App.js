import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./page/Home";
import Notfound from "./page/Notfound";
import NewsDetails from "./page/NewsDetails";


function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>

        <Route path="/news-details" element={<NewsDetails />} />


        <Route path="/not-found" element={<Notfound/>}/>
        <Route path="*" element={<Navigate to="not-found"/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
