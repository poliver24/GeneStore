// Service for sending requests to Protein API routes
import http from "../http-common";

const getProteins = () => {
  return http.get("/Proteins");
};

const getProtein = () => {
  return http.get(`/Proteins/${id}`);
};

const createProtein = () => {
  return http.post("/Proteins", data);
};

const updateProtein = () => {
  return http.put(`/Proteins/${id}`, data);
};

const deleteProtein = () => {
  return http.delete(`/Proteins/${id}`);
};

export default {
  getProteins,
  getProtein,
  createProtein,
  updateProtein,
  deleteProtein,
};