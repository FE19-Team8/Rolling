import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Button from '../Button/Button';

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
    <header className="sticky top-0 z-50 w-full py-3 bg-white shadow-md">
      <div className="flex justify-between items-center w-full mx-auto px-6 max-w-[1248px]">
        <div
          className="flex items-center gap-2 cursor-pointer transition-transform duration-200 ease-in-out select-none"
          style={{ transform: logoHovered ? 'scale(1.05)' : 'scale(1)' }}
          onClick={handleLogoClick}
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <img
            src="/assets/icons/ic_logo.svg"
            alt=""
            className="text-2xl"
          />
          <span className="text-2xl font-bold text-[#9935ff]">Rolling</span>
        </div>

        <nav className="flex items-center gap-4 min-h-10">
          {!isPostPage && (
            <Button
              variant="primary"
              size="medium"
              onClick={handleCreateClick}
            >
              롤링 페이퍼 만들기
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;