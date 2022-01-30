import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import {COUNTER_KEY, counterReducer, ICounterState} from "./counter/counter.reducer";

export interface State {
  [COUNTER_KEY]: ICounterState;
}

export const reducers: ActionReducerMap<State> = {
  [COUNTER_KEY]: counterReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
