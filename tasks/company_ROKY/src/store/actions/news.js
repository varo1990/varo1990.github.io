import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../Api";


export const getNewsListSearch = createAsyncThunk('news/getNewsListSearch', async (payload) => {
const {value}= payload
  const { data } = await Api.getNewsSearch(value);
  console.log(data, 1111111)
  return data;
})













// export const getNewsTags = createAsyncThunk('news/getNewsTags', async (payload) => {
//
//   const { data } = await Api.getNewsTags();
//   console.log(data, 22222)
//
//   return data;
// })
// export const getNewsSections = createAsyncThunk('news/getNewsSections', async (payload) => {
//
//   const { data } = await Api.getNewsSections();
//   console.log(data, 333333)
//
//   return data;
// })
// export const getNewsEditions = createAsyncThunk('news/getNewsEditions', async (payload) => {
//
//   const { data } = await Api.getNewsEditions();
//   console.log(data, 4444444)
//
//   return data;
// })