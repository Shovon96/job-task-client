import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://job-task-server-ecru.vercel.app",
  withCredentials: false,
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;