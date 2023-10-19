import { createReducer } from "@reduxjs/toolkit";
import {
  activateRequest,
  getTaskListRequest,
  getTaskRequest,
  loginRequest,
  logOut,
  registerRequest
} from "../actions/users";

const initialState = {
  token: localStorage.getItem('token') || '',
  profile: {},
  user: {},
  taskList: [],
  task: {}
}
export default createReducer(initialState, (builder) => {
  builder
    .addCase(loginRequest.fulfilled, (state, action) => {
      const { token, user } = action.payload;
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('token', token)
      state.token = token
      state.profile = user

    })
    .addCase(loginRequest.rejected, (state, action) => {
      console.log(action)
    })
    .addCase(logOut, (state, action) => {
      localStorage.removeItem('token')
      state.token = ''
      window.location.href = '/login'
    })
    .addCase(registerRequest.fulfilled, (state, action) => {
      const { user } = action.payload
      state.user = user
    })
    .addCase(activateRequest.fulfilled, (state, action) => {
      console.log(action.payload)
      const { token, users } = action.payload;
      localStorage.setItem('token', token)
      state.token = token
      state.profile = users
    })


    // .addCase(getTaskListRequest.fulfilled, (state, action) => {
    //   const { taskList } = action.payload;
    //   state.taskList = taskList
    // })

    // .addCase(getTaskRequest.fulfilled, (state, action) => {
    //
    //   const { task } = action.payload;
    //   state.task = task
    //   console.log(task, 22222)
    // })







})