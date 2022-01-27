import { ADDTODO, DELETETODO } from "./actions";

export const initialState = [{ id: 0, todo: "todotry", comp: false }];
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTODO: {
      const { id, todo, comp } = action.payload;
      return { ...state };
    }

    case DELETETODO:
      return state - 1;

    default:
      return state;
  }
};
