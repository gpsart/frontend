import axios from "axios";

export default axios.create({
  baseURL: "https://gpsart.app/api/",
  headers: {
    "Content-type": "application/json"
  }
});
