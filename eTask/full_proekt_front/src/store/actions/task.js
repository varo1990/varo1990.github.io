import {createAction, createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../Api";

export const createTask = createAsyncThunk("task/createTask", async (payload, {rejectWithValue}) => {
  try {
    console.log(payload, 1111110)
    // const {data} = await Api.createTask(payload);
    // return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
