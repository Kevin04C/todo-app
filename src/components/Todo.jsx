import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";
import { toast } from "react-hot-toast";
import { types } from "../context/types";
import "./Todo.css";

export const Todo = ({ id, todo, complete, date, handleEditTodo }) => {
  const { dispatch } = useContext(TodoContext);

  const handleDelete = () => {
    return toast((t) => (
      <div>
        <p className="text-center">
          ¿Seguro que deseas <b>ELIMINAR</b> este <b>TODO</b>?
        </p>
        <div className="d-flex justify-content-center gap-2">
          <button
            className="flex-grow-1 btn btn-danger"
            onClick={() => deleteTodo(t.id, id)}
          >
            Eliminar
          </button>
          <button
            className="flex-grow-1 btn btn-success"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancelar
          </button>
        </div>
      </div>
    ));
  };

  const deleteTodo = (toastId, idTodo) => {
    dispatch({
      type: types.delete,
      payload: idTodo,
    });
    toast.dismiss(toastId);
  };

  const handleCompleteTodo = () => {
    dispatch({
      type: types.complete,
      payload: id,
    });
  };

  return (
    <div className="alert alert-info">
      <h5 className="pointer" onClick={handleCompleteTodo}>
        {todo}
      </h5>
      <p>
        Completado:{" "}
        <span className={`${!complete && "text-danger"} fw-bold`}>
          {JSON.stringify(complete)}
        </span>
      </p>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <button
            className="btn btn-success me-2"
            onClick={() =>
              handleEditTodo({
                id,
                todo,
                complete,
                date,
              })
            }
          >
            Editar
          </button>
          <button className="btn btn-danger" onClick={handleDelete}>
            Eliminar
          </button>
        </div>
        <span>{date}</span>
      </div>
    </div>
  );
};
