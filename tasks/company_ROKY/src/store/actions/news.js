import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../Api";


export const getNewsListSearch = createAsyncThunk('news/getNewsListSearch', async (payload) => {
const {value}= payload
  const { data } = await Api.getNewsSearch(value);
  console.log(data, 1111111)
  return data;
})













