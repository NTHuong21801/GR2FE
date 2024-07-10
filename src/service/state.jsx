import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accountId: null,
    accessToken: null,
    email: null,
    refreshToken: null,
    accessExpiredTime: null,
    refreshExpiredTime: null,
    refreshTrigger: 0,
};
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.accountId = action.payload.accountId;
            state.email = action.payload.email;
            state.accessExpiredTime = action.payload.accessExpiredTime;
            state.refreshToken = action.payload.refreshToken;
            state.refreshExpiredTime = action.payload.refreshExpiredTime;
        },
        setLogout: (state) => {
            state.accessToken = null;
            state.accountId = null;
            state.email = null;
            state.accessExpiredTime = null;
            state.refreshToken = null;
            state.refreshExpiredTime = null;
            state.refreshTrigger = 0;
        },
        triggerRefresh: (state) => {
            state.refreshTrigger += 1;
        },
        resetRefresh: (state) => {
            state.refreshTrigger = 0;
        },
    },
});

export const { setMode, setLogin, setLogout, triggerRefresh, resetRefresh } =
    authSlice.actions;
export default authSlice.reducer;