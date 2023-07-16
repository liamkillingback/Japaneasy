import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      (state.token = action.payload.token), (state.user = action.payload.user);
    },
    setLogout: (state) => {
      (state.token = null), (state.user = null);
    },
    refreshUser: (state, action) => {
      state.user = action.payload.user
    }
  },
});

export const { setLogin, setLogout, refreshUser } = authSlice.actions;
export default authSlice.reducer;
