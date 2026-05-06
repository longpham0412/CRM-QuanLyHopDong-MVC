import axios from 'axios';

const API_URL = 'http://localhost:8080/crm-ver1/api/hopdong';

export const getAllHopDongs = async () => await axios.get(API_URL);
export const createHopDong = async (data) => await axios.post(API_URL, data);
export const updateHopDong = async (id, data) => await axios.put(`${API_URL}/${id}`, data);
export const deleteHopDong = async (id) => await axios.delete(`${API_URL}/${id}`);