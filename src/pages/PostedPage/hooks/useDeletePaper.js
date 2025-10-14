import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deletePaper } from '@/api/papers';

export default function useDeletePaper(setPapers = () => {}) {
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  const handleDeletePaper = async (paper) => {
    if (!window.confirm('정말 이 롤링페이퍼를 삭제하시겠습니까?')) return;

    try {
      setIsDeleting(true);

      // paper가 객체면 id 추출, 숫자면 그대로 사용
      const id = typeof paper === 'object' ? paper.id : paper;
      await deletePaper(id);

      console.log('롤링페이퍼 삭제 성공');
      navigate('/list');

      // 삭제된 항목 제외하고 상태 갱신
      setPapers((prev) => prev.filter((_p) => _p.id !== id));
    } catch (error) {
      console.error('롤링페이퍼 삭제 실패:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  return { handleDeletePaper, isDeleting };
}
