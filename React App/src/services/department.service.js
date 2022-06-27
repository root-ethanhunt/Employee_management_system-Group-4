import httpClient from "../http_connection/http-department";

const getAll = () => {
  return httpClient.get("/");
};

const get = (id) => {
  return httpClient.get(`/${id}`);
};

const create = (data) => {
  return httpClient.post("/", data);
};

const update = (data) => {
  return httpClient.put("/", data);
};

const remove = (id) => {
  return httpClient.delete(`/${id}`);
};

const updateEmpCount = (cid, did) => {
  return httpClient.put(`/updateEmpCount/${cid}/${did}`);
};

const totalCount = () => {
  return httpClient.get("/totalCount");
};

export default {
  getAll,
  create,
  get,
  update,
  remove,
  updateEmpCount,
  totalCount,
};
