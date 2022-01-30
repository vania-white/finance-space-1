import {createReducer, on} from "@ngrx/store";
import {changeUpdatedAt, clear, decrease, increase} from "./counter.actions";

export const COUNTER_KEY = 'counter';

export interface ICounterState {
  count: number;
  updatedAt?: number;
}

export const initialState: ICounterState = {
  count: 0
}

export const counterReducer = createReducer(
  initialState,
  on(increase, state => ({
    ...state,
    count: state.count + 1
  })),
  on(decrease, state => ({
    ...state,
    count: state.count - 1
  })),
  on(clear, state => ({
    ...state,
    count: 0
  })),
  on(changeUpdatedAt, (state, action) => ({
    ...state,
    updatedAt: action.updatedAt
  }))
);
