import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import loginReducer from "features/authentication/login/LoginSlice";
import articleReducer from "features/authenticated/articles/ArticleSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    article: articleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
