import axios, { AxiosError } from "axios";

interface ICustomError extends AxiosError {
  message: string;
  status: number;
  code: string;
}

const instance = axios.create({
  baseURL: "http://localhost:3000/api",
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const axiosError: ICustomError = error.response.data; // Use the custom ICustomError type
    console.log("errorData :", axiosError);
    return Promise.reject(axiosError);
  }
);

export default instance;
