import api from '@/api/api';
import { throwIfMissing } from '@/utils/validators';

const END_POINT = '/19-8/messages/';

// 필요시 활성화

// export const getMessage = (id) => api.get(`${END_POINT}${id}/`);

// export const patchMessage = (id) => api.patch(`${END_POINT}${id}/`);

// export const putMessage = (id) => api.put(`${END_POINT}${id}/`);

export const createMessage = (
  recipientId = throwIfMissing('recipient_id'),
  data = throwIfMissing('data')
) => api.post(`/19-8/recipients/${recipientId}/messages/`, data);

export const getMessageList = (recipientId = throwIfMissing('recipient_id'), options = {}) => {
  const { next, ...restOptions } = options;

  // next URL이 있으면 그대로 사용 (인코딩 방지)
  if (next) {
    return api.get(next);
  }

  // 첫 요청이면 limit 등의 파라미터 사용
  return api.get(`/19-8/recipients/${recipientId}/messages/`, {
    params: restOptions,
  });
};

export const deleteMessage = (id = throwIfMissing('id')) => api.delete(`${END_POINT}${id}/`);
