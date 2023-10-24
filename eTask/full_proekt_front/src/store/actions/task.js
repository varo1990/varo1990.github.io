import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../Api";

export const createTask = createAsyncThunk("tasks/createTask", async (payload, thunkAPI) => {

    try {
        const {data} = await Api.createTask(payload);
        return data
    } catch (e) {
        return thunkAPI.rejectWithValue(e.response.data);
    }
});


export const createCategories = createAsyncThunk("tasks/createTask", async (payload, thunkAPI) => {


    try {
        const {data} = await Api.createCategories(payload);
        return data
    } catch (e) {
        return thunkAPI.rejectWithValue(e.response.data);
    }
});


export const getTaskRequest = createAsyncThunk('tasks/getTaskListRequest', async (id) => {

    const {data} = await Api.Categories(id)
    return data


});


export const getTaskHistory = createAsyncThunk('tasks/getTaskHistory', async (id) => {

    const {data} = await Api.history(id)
    console.log(data, 88888888888)
    return data



});

export const deleteCategory = createAsyncThunk('tasks/deleteCategory', async (id) => {
    await Api.deleteCategory(id)
    return id
});




export const deleteTask = createAsyncThunk('tasks/deleteTask', async (payload) => {
    await Api.deleteTask(payload.taskId)
    return {taskId: payload.taskId, categoryIndex: payload.categoryIndex}
});
