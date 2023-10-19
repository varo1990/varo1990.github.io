import {createReducer} from "@reduxjs/toolkit";
import {createTask, getTaskRequest} from "../actions/task";

const initialState = {

  taskList: [],
  task: [],
  taskStatus: ''
}
export default createReducer(initialState, (builder) => {
  builder
    .addCase(createTask.fulfilled, (state, action) => {
      const {taskList} = action.payload;
      state.taskList = taskList

    })


    .addCase(getTaskRequest.pending, (state, action) => {

      state.taskStatus = 'loading'
    })
    .addCase(getTaskRequest.fulfilled, (state, action) => {

      state.task = action.payload
      state.taskStatus = 'success'


    })
    .addCase(getTaskRequest.rejected, (state, action) => {

      state.taskStatus = 'fall'

    })


})