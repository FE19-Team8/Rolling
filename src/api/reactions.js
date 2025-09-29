import api from "./api";

export const reactToPaper = (recipient_id) =>
  api.post(`/19-8/recipients/${recipient_id}/reactions/`);

export const getPaperReactions = (recipient_id, options = {}) =>
  api.get(`/19-8/recipients/${recipient_id}/reactions/`, { params: options });
