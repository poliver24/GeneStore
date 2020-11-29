// Service for sending requests to Protein API routes
import http from "../http-common";

const getProteins = () => {
  return http.get("/Proteins/");
};

const getProtein = id => {
  return http.get(`/Proteins/${id}/`);
};

const createProtein = data => {
  return http.post("/Proteins/", data);
};

const updateProtein = (id, data) => {
  return http.put(`/Proteins/${id}/`, data);
};

const deleteProtein = id => {
  return http.delete(`/Proteins/${id}/`);
};

export default {
  getProteins,
  getProtein,
  createProtein,
  updateProtein,
  deleteProtein,
};