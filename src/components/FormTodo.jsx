import React, { useContext, useEffect, useState } from "react";
import TodoContext from "../context/TodoContext";
import { toast } from 'react-hot-toast'
import { generateId } from "../helpers/generateId";
import { types } from "../context/types";

export const FormTodo = ({ editTodo, setEditTodo }) => {
  const [todo, setTodo] = useState("");

  const { dispatch } = useContext(TodoContext);

  useEffect(() => {
    if (editTodo.id) {
      setTodo(editTodo.todo);
    }
  }, [editTodo]);

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  const hanldeSubmit = (e) => {
    e.preventDefault();
    if(!todo.trim())
      return toast.error("Puedes dejar el campo vacio")
    if (editTodo.id) {
      dispatch({
        type: types.edit,
        payload: {
          id: editTodo.id,
          todo,
        },
      });
      toast.success("Todo ACTUALIZADO!!")
      setEditTodo({});
      setTodo("");
      return;
    }
    dispatch({
      type: types.add,
      payload: {
        id: generateId(),
        todo,
        complete: false,
        date: new Date().toLocaleDateString(),
      },
    });
    setTodo("");
  };

  return (
    <div>
      <p className="fs-5">{editTodo.id ? "Update Todo" : "New Todo"}</p>
      <form onSubmit={hanldeSubmit}>
        <input
          type="text"
          className="form-control mb-3"
          value={todo}
          placeholder="Todo"
          onChange={handleInputChange}
        />
        <input
          type="submit"
          className="btn btn-primary d-block w-100"
          value={editTodo.id ? "Actualizar Todo" : "Agregar Todo"}
        />
      </form>
    </div>
  );
};

FormTodo.defaultProps = {
  editTodo: {},
};
