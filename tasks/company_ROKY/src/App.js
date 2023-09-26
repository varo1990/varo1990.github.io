import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./page/Home";
import Notfound from "./page/Notfound";
import NewsDetails from "./page/NewsDetails";
import News from "./page/News";


function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/news' component={News} />
        <Route path='/news/:newsId' component={NewsDetails} />


        <Route path="/not-found" element={<Notfound/>}/>
        <Route path="*" element={<Navigate to="not-found"/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
