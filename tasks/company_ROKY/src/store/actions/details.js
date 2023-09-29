import {createAsyncThunk} from "@reduxjs/toolkit";
import Api from "../../Api";


export const getNews = createAsyncThunk("news/getNews",async (payload) => {
    const { id, params } = payload;
    const { data } = await Api.getNews(id, params);
  console.log(data, 666666)
    return data;
  }
);











