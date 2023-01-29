import axiosBase from "axios";

const axios = axiosBase.create({
  baseURL: "http://localhost:5500",
  headers: {
    "Content-Type": "application/json",
  }
})

axios.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("token"))

    if (token) {
      config.headers["x-access-token"] = token
    }

    return config
  }, (error) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response) => {
    return response
  }, async (error) => {
    // TODO: Refresh Token
    console.error(error)
    return Promise.reject(error)
  }
)

export default axios