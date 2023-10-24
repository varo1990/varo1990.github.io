import {createReducer} from "@reduxjs/toolkit";
import {
    createCategories,
    createTask,
    deleteCategory,
    deleteTask,
    getTaskHistory,
    getTaskRequest
} from "../actions/task";

const initialState = {

    taskList: [],
    task: [],
    tuskItem: [],
    taskStatus: '',
    history: []


}
export default createReducer(initialState, (builder) => {
    builder
        .addCase(createTask.fulfilled, (state, action) => {
            const {taskList} = action.payload;
            state.taskList = taskList

        })
        .addCase(deleteCategory.fulfilled, (state, action) => {

            state.task = state.task.filter((category) => category.id !== action.payload)

        })

        .addCase(deleteTask.fulfilled, (state, action) => {
            console.log(action,9999)
            state.task[action.payload.categoryIndex].tasks = state.task[action.payload.categoryIndex].tasks.filter((task) => task.id !== action.payload.taskId)

            // state.task =
            //     state.task[0].tasks?.filter((task) => {
            //                 return task.id !== action.payload;
            //             });

        })
        .addCase(deleteCategory.rejected, (state, action) => {
            state.taskStatus = 'fall'
        })
        .addCase(deleteTask.rejected, (state, action) => {

            state.taskStatus = 'fall'

        })

        .addCase(getTaskRequest.pending, (state, action) => {

            state.taskStatus = 'loading'
        })
        .addCase(getTaskRequest.fulfilled, (state, action) => {

            state.task = action.payload
            // state.taskItem = action.payload.taskItems
            state.taskStatus = 'success'
            console.log(state.task, 33333333333)


        })
        .addCase(getTaskRequest.rejected, (state, action) => {

            state.taskStatus = 'fall'

        })



      .addCase(getTaskHistory.fulfilled, (state, action) => {

          state.history = action.payload
          console.log(state.history, 11111111111)


      })


})
