import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "../axios";

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [ user, setUser ] = useState(() => {
    if (localStorage.getItem("token")) {
      let token = JSON.parse(localStorage.getItem("token"))
      let { username } = jwtDecode(token)
      return username 
    }

    return null;
  })

  const navigate = useNavigate()
  
  const login = async (username, password) => {
    const { data } = await axios.post("/login", {
      username,
      password,
    });

    const { token } = data

    localStorage.setItem("token", JSON.stringify(token))
    setUser(jwtDecode(token).username)
    navigate("/")
  }

  const register = async (username, password) => {
    const { data } = await axios.post("/register", {
      username,
      password,
    });

    const { token } = data

    setUser(jwtDecode(token).username)
    localStorage.setItem("token", JSON.stringify(token))
    navigate("/")
  }

  const logout = async () => {
    localStorage.removeItem("token")
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )

}

export default AuthContext