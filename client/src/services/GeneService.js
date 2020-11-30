// Service for sending requests to Gene API routes
import http from "../http-common";

const getGenes = () => {
    return http.get("/genes/");
};

const getGene = id => {
    return http.get(`/genes/${id}/`);
};

const createGene = data => {
    return http.post("/genes/", data);
};

const updateGene = (id, data) => {
    return http.put(`/genes/${id}/`, data);
};

const deleteGene = (id) => {
    return http.delete(`/genes/${id}/`)
}

export default {
    getGenes,
    getGene,
    createGene,
    updateGene,
    deleteGene
};