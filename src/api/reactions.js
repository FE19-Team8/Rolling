import api from "./api";
import { throwIfMissing } from "../utils/validators";

export const reactToPaper = (recipient_id = throwIfMissing("recipinet_id")) =>
  api.post(`/19-8/recipients/${recipient_id}/reactions/`);

export const getPaperReactions = (
  recipient_id = throwIfMissing("recipinet_id"),
  options = {}
) =>
  api.get(`/19-8/recipients/${recipient_id}/reactions/`, { params: options });
