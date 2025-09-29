import api from "./api";

const END_POINT = "/19-8/recipients/";

export const getPaperList = (options = {}) =>
  api.get(END_POINT, {
    params: options,
  });
export const createPaper = (data) => api.post(END_POINT, data);

export const getTargetPaper = (id) => api.get(`${END_POINT}${id}/`);

export const deletePaper = (id) => api.delete(`${END_POINT}${id}/`);
