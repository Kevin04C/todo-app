import { types } from "./types.js";

export const reducerTodo = (state = [], action) => {
  switch (action.type) {
    case types.add:
      return [...state, action.payload];

    case types.edit:
      const updateTodo = state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, todo: action.payload.todo }
          : todo
      );

      return updateTodo;

    case types.complete:
      const completeTodo = state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, complete: !todo.complete }
          : todo
      );
      return completeTodo;
    case types.delete:
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
};
