import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Set up global default configuration
instance.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export default instance;
