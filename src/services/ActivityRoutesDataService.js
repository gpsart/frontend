import http from "../http-common";

class ActivityRoutesDataService {
  getAll() {
    return http.get("/routes");
  }

  get(id) {
    return http.get(`/routes/${id}`);
  }
}

export default new ActivityRoutesDataService();
