// Dans votre fichier où vous utilisez Axios (par exemple, api.ts)
import axios from "axios"

const instance = axios.create({
  baseURL: "http://localhost:3000/api",
})

instance.interceptors.request.use(
  (config) => {
    const accessToken = sessionStorage.getItem("accessToken")
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default instance
