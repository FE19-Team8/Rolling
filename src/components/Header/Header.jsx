import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Button from '../Button/Button';
import Logo from '@/assets/icons/ic_logo.svg?react';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [logoHovered, setLogoHovered] = useState(false);

  const isPostPage = location.pathname === '/post';

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleCreateClick = () => {
    navigate('/post');
  };

  return (
    <div className="border-gray200 sticky top-0 z-50 h-[64px] w-full border-b bg-white py-3">
      <div className="mx-auto flex w-full max-w-[1248px] items-center justify-between px-6">
        <div
          className="flex cursor-pointer items-center gap-2 transition-transform duration-200 ease-in-out select-none"
          style={{ transform: logoHovered ? 'scale(1.05)' : 'scale(1)' }}
          onClick={handleLogoClick}
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <Logo className="h-7 w-7" />
          <span className="text-[19.97px] font-bold">Rolling</span>
        </div>

        <div className="flex min-h-10 items-center gap-4">
          {!isPostPage && (
            <Button
              variant="outlined"
              size="custom"
              paddingX={16}
              paddingY={8}
              onClick={handleCreateClick}
            >
              <span className="text-[16px] font-bold">롤링 페이퍼 만들기</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
