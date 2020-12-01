// Service for sending requests to Protein API routes
import http from "../http-common";

const getProteins = () => {
  return http.get("/proteins/");
};

const getAssociatedProteins = id => {
  return http.get(`/proteins/?search=${id}`);
}

const getProtein = id => {
  return http.get(`/proteins/${id}/`);
};

const createProtein = data => {
  return http.post("/proteins/", data);
};

const updateProtein = (id, data) => {
  return http.put(`/proteins/${id}/`, data);
};

const deleteProtein = id => {
  return http.delete(`/proteins/${id}/`);
};

export default {
  getProteins,
  getProtein,
  createProtein,
  updateProtein,
  deleteProtein,
  getAssociatedProteins
};