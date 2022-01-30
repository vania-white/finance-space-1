import {createAction, props} from "@ngrx/store";

enum COUNTER_ACTIONS {
  increase = '[COUNTER] increase',
  decrease = '[COUNTER] decrease',
  clear = '[COUNTER] clear',
  changeUpdatedAt = '[COUNTER] change updated at'
}

export const increase = createAction(COUNTER_ACTIONS.increase);
export const decrease = createAction(COUNTER_ACTIONS.decrease);
export const clear = createAction(COUNTER_ACTIONS.clear);
export const changeUpdatedAt = createAction(
  COUNTER_ACTIONS.changeUpdatedAt,
  props<{updatedAt: number}>()
);
