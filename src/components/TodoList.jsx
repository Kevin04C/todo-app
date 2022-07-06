import { useContext, useEffect } from "react";
import { Todo } from './Todo'
import TodoContext from "../context/TodoContext";

export const TodoList = ({handleEditTodo}) => {
  const { todos } = useContext(TodoContext);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  
  return (
    <div>
      {
        todos.length === 0 ? 
          <div className="alert alert-info">
            No hay Todos, agregue uno
          </div> 
          : (
            todos.map(todo => (
              <Todo 
              key={todo.id}
              handleEditTodo={handleEditTodo}
                {...todo}
              />
            ))
          )
      }
    </div>
  )
};
