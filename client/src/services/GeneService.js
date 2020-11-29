// Service for sending requests to Gene API routes
import http from "../http-common";

const getGenes = () => {
    return http.get("/genes");
};

const getGene = () => {
    return http.get(`/genes/${id}`);
};

const createGene = () => {
    return http.post("/genes", data);
};

const updateGene = () => {
    return http.put(`/genes/${id}`, data);
};

const deleteGene = () => {
    return http.delete(`/genes/${id}`)
}

export default {
    getGenes,
    getGene,
    createGene,
    updateGene,
    deleteGene
};