import http from "../http-common";

class ActivityRoutesDataService {
  getAll() {
    return http.get("/v2/routes");
  }

  get(id) {
    return http.get(`/v2/routes/${id}`);
  }
}

export default new ActivityRoutesDataService();
