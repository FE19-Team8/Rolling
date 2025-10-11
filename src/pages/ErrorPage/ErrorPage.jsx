import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button/Button';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center pt-50 gap-10 relative overflow-hidden">
      <div className="flex flex-col items-center gap-10 mb-20">
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
