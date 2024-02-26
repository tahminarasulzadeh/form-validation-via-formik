import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchContent = createAsyncThunk(
  'content/fetchContent',
  async (formData) => {
   console.log("action", formData)
    const response = await fetch("http://localhost:3000/messages/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
   const data = await response.json()
   return data
  }
)
const msgSlice = createSlice({
  name: "message",
  initialState: {
   isLoading: false,
   error: null,
   message: null
  },
  reducers: {
    getMessage: (state, action) => {
      state.msg = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.isLoading = false
      state.message = action.payload
    })
    builder.addCase(fetchContent.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error.message
    })
  },
});

export const { getMessage } = msgSlice.actions;
export default msgSlice.reducer;
