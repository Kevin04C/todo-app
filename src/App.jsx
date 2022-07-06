import { useState } from "react";
import { FormTodo } from "./components/FormTodo";
import { TodoList } from "./components/TodoList";
import { Header } from "./components/Header";
import { Toaster, toast } from "react-hot-toast";

function App() {
  const [editTodo, setEditTodo] = useState({});

  const handleEditTodo = (todo) => {
    setEditTodo(todo);
  };

  return (
    <div className="container mt-2">
      <Header />
      <div className="row">
        <div className="col-md-5 mb-3">
          <FormTodo editTodo={editTodo} setEditTodo={setEditTodo} />
        </div>
        <div className="col-md-7">
          <TodoList handleEditTodo={handleEditTodo} />
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
