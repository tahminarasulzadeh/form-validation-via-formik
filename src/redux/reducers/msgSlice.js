import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  msg: ''
};
const msgSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    getMessage: (state, action) => {
      state.msg = action.payload;
    },
  },
});

export const { getMessage } = msgSlice.actions;
export default msgSlice.reducer;
