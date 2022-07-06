import { useContext } from "react";
import TodoContext from "../context/TodoContext";

export const Login = () => {
  const { setAuth } = useContext(TodoContext);

  const handleLogin = () => {
    setAuth({
      auth: true,
      name: "Kevin",
    });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-secondary px-4 py-2" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
