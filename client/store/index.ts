import { Context, createWrapper } from "next-redux-wrapper";
import { createStore, Store } from "redux";
import { rootReducer, RootState } from "@/store/reducers";

const makeStore = (context: Context) => createStore(rootReducer);

export const wrapper = createWrapper<Store<RootState>>(makeStore, { debug: true });