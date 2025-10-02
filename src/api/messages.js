/* eslint-disable prettier/prettier */

import api from "./api";
import { throwIfMissing } from "../utils/validators";

const END_POINT = "/19-8/messages/";

// 필요시 활성화

// export const getMessage = (id) => api.get(`${END_POINT}${id}/`);

// export const patchMessage = (id) => api.patch(`${END_POINT}${id}/`);

// export const putMessage = (id) => api.put(`${END_POINT}${id}/`);

export const createMessage = (
  recipientId = throwIfMissing("recipient_id"),
  data = throwIfMissing("data"),
) => api.post(`/19-8/recipients/${recipientId}/messages/`, data);

export const getMessageList = (
  recipientId = throwIfMissing("recipient_id"),
  options,
) =>
  api.get(`/19-8/recipients/${recipientId}/messages/`, {
    params: options,
  });

export const deleteMessage = (id = throwIfMissing("id")) =>
  api.delete(`${END_POINT}${id}/`);
