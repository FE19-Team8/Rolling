import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button/Button';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-center gap-10 overflow-hidden pt-50">
      <div className="mb-20 flex flex-col items-center gap-10">
        <h1 className="text-5xl font-bold">404 Not Found</h1>
        <span className="text-xl text-gray-700">
          존재하지 않는 주소를 입력했거나, 페이지가 삭제되었어요 😢
        </span>
      </div>

      <Button size="medium" onClick={() => navigate('/')}>
        메인으로 돌아가기
      </Button>
    </div>
  );
};

export default ErrorPage;
