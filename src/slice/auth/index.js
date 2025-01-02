import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  userDetails: [],
  Comments: 0,
  Calls: 0,
  FeedBack: 0,
  CostSheet: 0,
  Chats: 0,
  Enquiry: 0,
  Updates: 0,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLogin(state, action) {
      state.isLogin = action.payload.isLogin;
    },
    setUserDetails(state, action) {
      state.userDetails = action.payload.userDetails;
    },
    setCommentss(state, action) {
      state.Comments = action.payload;
    },
    setCalls(state, action) {
      state.Calls = action.payload;
    },
    setFeedBack(state, action) {
      state.FeedBack = action.payload;
    },
    setCostSheet(state, action) {
      state.CostSheet = action.payload;
    },
    setChats(state, action) {
      state.Chats = action.payload;
    },
    setEnquiry(state, action) {
      state.Enquiry = action.payload;
    },
    setUpdates(state, action) {
      state.Updates = action.payload;
    },
  },
});

export const {
  setIsLogin,
  setUserDetails,
  setCommentss,
  setCalls,
  setFeedBack,
  setCostSheet,
  setChats,
  setEnquiry,
  setUpdates,
} = authSlice.actions;

export default authSlice.reducer;
