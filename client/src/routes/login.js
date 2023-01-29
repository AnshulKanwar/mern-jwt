import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Container from "../components/Container";
import Error from "../components/Error";
import Input from "../components/Input";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await login(username, password);
    } catch (error) {
      const errorText = error.response.data.message;
      setError(errorText);
    }
  };

  return (
    <Container title="Login">
      {error && <Error text={error} />}
      <form onSubmit={handleSubmit} className="flex flex-col gap-8 my-5">
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" text="Login" />
      </form>
      <span className="block text-sm text-slate-400">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-500 underline">
          Sign up
        </Link>{" "}
        instead
      </span>
    </Container>
  );
};

export default Login;
