import React, {Component, useState} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Reset from "./components/Reset";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import ContactUs from "./pages/ContactUs";
import Notifications from "./pages/Notifications";
import History from "./pages/History";
import Categories from "./pages/Categories";
import AccountSettings from "./pages/AccountSettings";
import TasksEdit from "./pages/TasksEdit";
import Access from "./components/Access";
// import TaskCategory from "./components/TaskCategory";
import Category from "./pages/Category";

const App = () => {
  const [taskList, setTaskList] = useState([
    {
      color: "#3A4FB5",
      email: "varo.1990@yahoo.com",
      hours: ['3', '10', '7'],
      list: ['13212312', '798797898'],
      min: ['20', '15', '10'],
      category: "READ_BOOKS",
      telegram: "asdasdasdas",
      timeType: [2, 1, 1],
    },
])
  const [categories, setCategories] = useState([
    {value: 'READ_BOOKS', label: 'Read Books'},
    {value: 'DRINK_WATER', label: 'Drink water'},
    {value: 'DO_EXERCISES', label: 'Do exercises'},
    {value: 'DO_ONLINE_CLASSES', label: 'Do online classes'},
  ]);
  const [editList, setEditList] = useState([])
  // console.log('taskList', taskList)
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
          <Route path="/tasks" element={
            <Tasks
              setTaskList={setTaskList}
              setEditList={setEditList}
              categories={categories}
              setCategories={setCategories}
            />}/>
          <Route path="/tasks-edit" element={
            <TasksEdit
              setTaskList={setTaskList}
              editList={editList}
              setEditList={setEditList}
              categories={categories}
              setCategories={setCategories}
            />}/>
          <Route path="/profile/:settings" element={<AccountSettings/>}/>
          <Route path="/notifications" element={<Notifications/>}/>
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