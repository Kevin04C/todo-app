import { createContext, useEffect, useReducer, useState } from "react";
import { reducerTodo } from "./reducerTodo";

const TodoContext = createContext();

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

const initilStateAuth = () => {
  return JSON.parse(localStorage.getItem("auth")) || { auth: false, name: "" };
};

export const TodoProvider = ({ children }) => {
  const [auth, setAuth] = useState(initilStateAuth);
  const [todos, dispatch] = useReducer(reducerTodo, [], init);

  return (
    <TodoContext.Provider value={{ todos, dispatch, auth, setAuth }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
