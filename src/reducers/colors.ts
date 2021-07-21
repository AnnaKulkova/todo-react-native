import { SELECT_COLOR } from '../constants/actionTypes';
import { Action } from '../types';
import {
  amethyst,
  burntSienna,
  frolly,
  malibu,
  salomie,
  turquoiseBlue,
} from '../constants/colors';
const initial_state = [
  {
    id: '0',
    color: burntSienna,
    active: false,
  },
  {
    id: '1',
    color: frolly,
    active: false,
  },
  {
    id: '2',
    color: amethyst,
    active: false,
  },
  {
    id: '3',
    color: malibu,
    active: false,
  },
  {
    id: '4',
    color: turquoiseBlue,
    active: false,
  },
  {
    id: '5',
    color: salomie,
    active: false,
  },
];
export default function colors(state = initial_state, action: Action) {
  switch (action.type) {
    case SELECT_COLOR:
      return state.map(color => {
        if (color.id === action.payload.id) {
          return { ...color, active: !color.active };
        }
        return { ...color, active: false };
      });
    default:
      return state;
  }
}
