import {createReducer} from "@reduxjs/toolkit";
import {createCategories, createTask, getTaskRequest} from "../actions/task";

const initialState = {

  taskList: [],
  task: [],
  tuskItem: [],
  taskStatus: '',


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
      // state.taskItem = action.payload.taskItems
      state.taskStatus = 'success'
      console.log(state.task, 33333333333 )


    })
    .addCase(getTaskRequest.rejected, (state, action) => {

      state.taskStatus = 'fall'

    })


})