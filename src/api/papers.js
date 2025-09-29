import api from "./api";
import { throwIfMissing } from "../utils/validators";

const END_POINT = "/19-8/recipients/";

export const getPaperList = (options = {}) =>
  api.get(END_POINT, {
    params: options,
  });
export const createPaper = (data = throwIfMissing("data")) =>
  api.post(END_POINT, data);

export const getTargetPaper = (id = throwIfMissing("id")) =>
  api.get(`${END_POINT}${id}/`);

export const deletePaper = (id = throwIfMissing(id)) =>
  api.delete(`${END_POINT}${id}/`);
