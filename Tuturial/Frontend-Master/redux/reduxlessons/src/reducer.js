import { DECREMENT, INCREMENT, RESET } from "./actions";
import { combineReducers } from "redux";
//export const initialState = { count: 0 };
export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return (state = 0);
    default:
      return state;
  }
};

export const authReducer = (state = false, action) => {
  switch (action.type) {
    case "LOG_IN":
      return true;
    case "LOG_OUT":
      return false;
    default:
      return state;
  }
};

export const allReducers = combineReducers({
  counterReducer,
  authReducer,
});
// export const reducer = (state = initialState, action) => {
//   if (action.type === INCREMENT) {
//     return { count: state.count + 1 };
//   }
//   if (action.type === DECREMENT) {
//     return { count: state.count - 1 };
//   }
//   if (action.type === SET) {
//     return { count: parseInt(action.payload, 10) };
//   }
// };
