import {createFeatureSelector, createSelector} from "@ngrx/store";
import {COUNTER_KEY, ICounterState} from "./counter.reducer";

export const featureSelector = createFeatureSelector<ICounterState>(COUNTER_KEY);

export const countSelector = createSelector(
  featureSelector,
  state => state.count
)

export const updatedAtSelector = createSelector(
  featureSelector,
  state => state.updatedAt
)
