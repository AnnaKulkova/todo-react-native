import { SELECT_COLOR } from '../constants/actionTypes';

export const selectColor = (id: string) => ({
  type: SELECT_COLOR,
  payload: { id },
});
