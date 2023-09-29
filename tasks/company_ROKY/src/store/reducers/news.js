import {createReducer} from "@reduxjs/toolkit";
import {  getNewsListSearch } from "../actions/news";

const initialState = {
  newsListSearch: [],
  news: [],
  getNewsListStatus: ''
}
export default createReducer(initialState, {
  [getNewsListSearch.pending]: (store, action) => {
    store.getNewsListStatus = 'request';
  },
  [getNewsListSearch.fulfilled]: (store, action) => {

    const data = action.payload;
    store.newsListSearch = data.response.results;
    store.getNewsListStatus = 'ok';

  },
  [getNewsListSearch.rejected]: (store, action) => {
    store.getNewsListStatus = 'fail';

  },


})

