import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/auth.slice";
import { useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;
export const RootState = store.getState();

export default store;