import {createReducer} from "@reduxjs/toolkit";
import {getNews } from "../actions/details";

const initialState = {
  news: [],
  status: ''
}
export default createReducer(initialState, {
  [getNews.pending]: (store, action) => {
    store.status = 'request';
  },
  [getNews.fulfilled]: (store, action) => {

    const data = action.payload;
    store.news = data.response.content;
    store.status = 'ok';

  },
  [getNews.rejected]: (store, action) => {
    store.status = 'fail';
  },

})

