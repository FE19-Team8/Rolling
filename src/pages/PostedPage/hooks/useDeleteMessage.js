import { useState } from 'react';

import { deleteMessage } from '@/api/messages';

export default function useDeleteMessage(setMessages = () => {}) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async (messageId) => {
    if (!window.confirm('정말 이 메시지를 삭제하시겠습니까?')) return;

    try {
      setIsDeleting(true);
      await deleteMessage(messageId);
      console.log('메시지 삭제 성공');

      // 안전하게 setMessages 호출
      setMessages((prev) => prev.filter((msg) => msg.id !== messageId));
    } catch (error) {
      console.error('메시지 삭제 실패:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  return { handleDelete, isDeleting };
}
