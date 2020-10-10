import http from "../http-common";

const upload = (file, name, onUploadProgress) => {
  let formData = new FormData();

  formData.append("gpx_file[file]", file);
  formData.append("gpx_file[name]", name);
  return http.post("/v1/routes", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

const uploadActivity = (id ,file, name, onUploadProgress) => {
  let formData = new FormData();

  formData.append("gpx_file[file]", file);
  formData.append("gpx_file[name]", name);
  return http.post(`/v1/routes/${id}/activities`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

export default {
  upload,
  uploadActivity,
};
