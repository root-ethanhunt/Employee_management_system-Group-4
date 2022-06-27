import httpClient from "../http_connection/http-employees";
import httpProject from "../http_connection/http-project";

const getAll = () => {
  return httpClient.get("/");
};

const get = (id, data) => {
  return httpClient.get(`/${id}`, data);
};

const create = (data) => {
  return httpClient.post("/", data);
};

const update = (data) => {
  return httpClient.put("/", data);
};

const remove = (id) => {
  return httpClient.delete(`/delete/${id}`);
};

const login = (username, password) => {
  return httpClient.post(`/login/${username}/${password}`);
};

const countDept = (id) => {
  return httpClient.get(`/countDept/${id}`);
};

const countProject = (id) => {
  return httpClient.get(`/countProject/${id}`);
};

const findByProject = (id) => {
  return httpClient.get(`/findByProject/${id}`);
};

const findByDept = (id) => {
  return httpClient.get(`/findByDept/${id}`);
};

const findIdByName = (name) => {
  return httpClient.get(`/findIdByName/${name}`);
};

const updatePassword = (pass, id) => {
  return httpClient.put(`/updatePassword/${pass}/${id}`);
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
  login,
  countDept,
  countProject,
  findByProject,
  findByDept,
  findIdByName,
  updatePassword,
  totalCount,
};
