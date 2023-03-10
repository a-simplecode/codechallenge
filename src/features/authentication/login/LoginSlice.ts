import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { LoginServices, LoginResponse, LoginRequest } from "./LoginServices";
import { RootState } from "app/store";
import ENCRYPTION_ENUM from "utilities/encryption/encryptionEnum";

type StatusEnum = "idle" | "loading" | "failed";

export interface LoginState {
  value: LoginResponse;
  status: StatusEnum;
}

export const initialState: LoginState = {
  value: { data: { accessToken: "", error: { statusCode: null, message: "", error: "" } } },
  status: "idle",
};

export const loginWithEmailAndPassword = createAsyncThunk("users/login", async (request: LoginRequest) => {
  const loginServices: LoginServices = new LoginServices();
  const { data } = await loginServices.handleLogin(request);
  return data;
});

const resetState = (state: LoginState) => {
  state.value.data.accessToken = "";
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout(state) {
      state.status = "failed";
      resetState(state);
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(loginWithEmailAndPassword.pending, (state) => {
        state.status = "loading";
        resetState(state);
      })
      .addCase(loginWithEmailAndPassword.fulfilled, (state, action) => {
        state.status = "idle";
        state.value.data = action.payload;
        AsyncStorage.setItem(ENCRYPTION_ENUM.access_token, action.payload.accessToken);
      })
      .addCase(loginWithEmailAndPassword.rejected, (state, action) => {
        if (action.error.message === "401") {
          alert("invalid username or password");
        }
        state.status = "failed";
        resetState(state);
      });
  },
});
export const selectAccessToken = (state: RootState): string | undefined => state.login.value?.data?.accessToken;
export const selectStatus = (state: RootState): StatusEnum => state.login.status;

export default loginSlice.reducer;
