import axios from "axios";

export default axios.create({
  baseURL: "https://gpsart.app/api/v1",
  headers: {
    "Content-type": "application/json"
  }
});
