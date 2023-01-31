import { Context, createWrapper } from "next-redux-wrapper";
import { AnyAction, Store } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { reducer, RootState } from "@/store/reducers";
import { ThunkDispatch } from "redux-thunk";

const makeStore = (context: Context) => configureStore({ reducer });

export const wrapper = createWrapper<Store<RootState>>(makeStore, { debug: true });

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>