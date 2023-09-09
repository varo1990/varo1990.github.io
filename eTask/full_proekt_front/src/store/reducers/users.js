import { createReducer } from "@reduxjs/toolkit";
import { activateRequest, getFriendsListRequest, loginRequest, logOut, registerRequest } from "../actions/users";
import { socketOffline, socketOnline } from "../actions/socket";

const initialState = {
  token: localStorage.getItem('token') || '',
  profile: {},
  user: {},
  friendsList: [],
}
export default createReducer(initialState, (builder) => {
  builder
    .addCase(loginRequest.fulfilled, (state, action) => {
      const { token, users } = action.payload;
      localStorage.setItem('token', token)
      state.token = token
      state.profile = users
    })
    .addCase(loginRequest.rejected, (state, action) => {
    })
    .addCase(logOut, (state, action) => {
      localStorage.removeItem('token')
      state.token = ''
      window.location.href = '/login'
    })
    .addCase(registerRequest.fulfilled, (state, action) => {
      const { user } = action.payload
      state.user = user
    })
    .addCase(activateRequest.fulfilled, (state, action) => {
      console.log(action.payload)
      const { token, users } = action.payload;
      localStorage.setItem('token', token)
      state.token = token
      state.profile = users
    })
    .addCase(getFriendsListRequest.fulfilled, (state, action) => {
      const { users } = action.payload;
      state.friendsList = users
    })
    .addCase(socketOnline, (state, action) => {
      const { userId } = action.payload;
      state.friendsList = state.friendsList.map(u => {
        if (+u.id === +userId) {
          u.isOnline = true
        }
        return u;
      })
    })
    .addCase(socketOffline, (state, action) => {
      const { userId } = action.payload;
      state.friendsList = state.friendsList.map(u => {
        if (+u.id === +userId) {
          u.isOnline = false;
          u.lastVisit = new Date()
        }
        return u;
      })
    })
})