import { AnyAction, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { newsSlice } from "src/features/news/slice/news.slice";

export const store = configureStore({ reducer: newsSlice.reducer });

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
