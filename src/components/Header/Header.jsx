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
    <div className="sticky top-0 z-50 w-full h-[64px] py-3 bg-white border-b border-gray200 ">
      <div className="flex justify-between items-center w-full mx-auto px-6 max-w-[1248px]">
        <div
          className="flex items-center gap-2 cursor-pointer transition-transform duration-200 ease-in-out select-none"
          style={{ transform: logoHovered ? 'scale(1.05)' : 'scale(1)' }}
          onClick={handleLogoClick}
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <Logo className="w-7 h-7" />
          <span className="text-[19.97px] font-bold ">Rolling</span>
        </div>

        <div className="flex items-center gap-4 min-h-10">
          {!isPostPage && (
            <Button
              variant="outlined"
              size="custom"
              paddingX={16}
              paddingY={8}
              onClick={handleCreateClick}
            >
              <span className="font-bold text-[16px]">롤링 페이퍼 만들기</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
