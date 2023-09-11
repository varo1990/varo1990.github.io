import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Reset from "./components/Reset";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import ContactUs from "./pages/ContactUs";
import History from "./pages/History";
import Categories from "./pages/Categories";
import AccountSettings from "./pages/AccountSettings";
import TasksEdit from "./pages/TasksEdit";
import Access from "./components/Access";
import Category from "./pages/Category";

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home"/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/reset" element={<Reset/>}/>
          <Route path="/access" element={<Access/>}/>


          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/categories" element={<Categories  />}/>
          <Route path="/category" element={<Category/>}/>
          <Route path="/tasks" element={<Tasks />}/>
          <Route path="/tasksedit" element={ <TasksEdit/>}/>
          <Route path="/profile/:settings" element={<AccountSettings/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
          <Route path="/history" element={<History/>}/>


          <Route path="/not-found" element={<NotFound/>}/>

          <Route path="*" element={<Navigate to="not-found"/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;