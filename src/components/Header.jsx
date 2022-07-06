import { useContext } from "react";
import TodoContext from "../context/TodoContext";

export const Header = () => {
  const { auth, setAuth } = useContext(TodoContext);

  const handleLogout = () => {
    setAuth({
      auth: false,
      name: ""
    })
  }

  return (
    <>
      <header className="d-flex justify-content-between">
        <h1>Todo-App</h1>
        <div>
          <span className="me-3 fs-5 fw-bold">{auth.name}</span>
          <button 
            className="btn btn-outline-secondary"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </header>
      <hr />
    </>
  );
};
