import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import Api from "../../Api";
import { useSearchParams } from "react-router-dom";


export const loginRequest = createAsyncThunk('users/loginRequest', async (payload, thunkAPI) => {
  try {
    const { email, password } = payload;
    const { data } = await Api.login(email, password);
    return data
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
})

export const registerRequest = createAsyncThunk('/users/registerRequest', async (payload, thunkAPI) => {
  try {
    const { data } = await Api.register(payload)
    return data
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data)
  }

})

export const activateRequest = createAsyncThunk('/users/activateRequest', async (payload, thunkAPI) => {
  try {
    const { email, code } = payload;
    const { data } = await Api.activate(email, code)
    return data
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data)
  }
})

// export const getFriendsListRequest = createAsyncThunk("users/getFriendsListRequest", async (payload, thunkAPI) => {
//   const { data } = await Api.friendList(payload)
//   return data;
// })

export const logOut = createAction('users/logOut');