import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8005/api/employees",
  headers: {
    "Content-Type": "application/json",
  },
});
