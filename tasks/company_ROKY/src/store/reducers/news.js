import {createReducer} from "@reduxjs/toolkit";
import {getNewsEditions,  getNewsListSearch, getNewsSections, getNewsTags} from "../actions/news";

const initialState = {
  newsListSearch: [],
  // newsListTags: [],
  // newsListSections: [],
  // newsListEditions: [],
  getNewsListStatus: ''
}
export default createReducer(initialState, {
  [getNewsListSearch.pending]: (store, action) => {
    store.getNewsListStatus = 'request';
  },
  [getNewsListSearch.fulfilled]: (store, action) => {



    const data = action.payload;
    store.newsListSearch = data.response.results;
    console.log(data, 8888899)



    store.getNewsListStatus = 'ok';

  },
  [getNewsListSearch.rejected]: (store, action) => {
    store.getNewsListStatus = 'fail';

  },



})

  // [getNewsTags.pending]: (store, action) => {
  //   store.getNewsListStatus = 'request';
  // },
  // [getNewsTags.fulfilled]: (store, action) => {
  //
  //   const data= action.payload;
  //   store.newsListTags = data.response.results;
  //
  //   store.getNewsListStatus = 'ok';
  //
  // },
  // [getNewsTags.rejected]: (store, action) => {
  //   store.getNewsListStatus = 'fail';
  //
  // },
  //
  //
  //
  //
  // [getNewsSections.pending]: (store, action) => {
  //   store.getNewsListStatus = 'request';
  // },
  // [getNewsSections.fulfilled]: (store, action) => {
  //
  //   const data= action.payload;
  //   store.newsListSections = data.response.results;
  //
  //   store.getNewsListStatus = 'ok';
  //
  // },
  // [getNewsSections.rejected]: (store, action) => {
  //   store.getNewsListStatus = 'fail';
  //
  // },
  //
  //
  //
  //
  //
  // [getNewsEditions.pending]: (store, action) => {
  //   store.getNewsListStatus = 'request';
  // },
  // [getNewsEditions.fulfilled]: (store, action) => {
  //
  //   const data= action.payload;
  //   store.newsListEditions = data.response.results;
  //   store.getNewsListStatus = 'ok';
  //
  // },
  // [getNewsEditions.rejected]: (store, action) => {
  //   store.getNewsListStatus = 'fail';
  //
  // },

// })