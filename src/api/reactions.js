/* eslint-disable prettier/prettier */

import api from "./api";
import { throwIfMissing } from "../utils/validators";

export const reactToPaper = (
  recipientId = throwIfMissing("recipinet_id"),
  data = throwIfMissing("data"),
) => api.post(`/19-8/recipients/${recipientId}/reactions/`, data);

export const getPaperReactions = (
  recipientId = throwIfMissing("recipinet_id"),
  options = {},
) => api.get(`/19-8/recipients/${recipientId}/reactions/`, { params: options });
