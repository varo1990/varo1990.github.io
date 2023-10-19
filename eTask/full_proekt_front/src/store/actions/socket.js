// import { io } from "socket.io-client";
// import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
//
// const { REACT_APP_API_URL } = process.env;
//
// let socket
//
//
// export const socketOnline = createAction('socket/socketOnline')
// export const socketOffline = createAction('socket/socketOffline')
//
// export const socketInit = createAsyncThunk('socket/socketInit', (token, { dispatch }) => {
//   if (socket) {
//     return;
//   }
//   socket = io(REACT_APP_API_URL, {
//     extraHeaders: {
//       Authorization: `Bearer ${token}`
//     }
//   })
//   socket.on('connect', () => {
//     console.log('connected')
//   })
//   socket.on('user_online', (data) => {
//     dispatch(socketOnline(data))
//   })
//   socket.on('user_offline', (data) => {
//     dispatch(socketOffline(data))
//   })
// })
//
