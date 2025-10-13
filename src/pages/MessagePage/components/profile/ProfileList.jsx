import React from 'react';
import Profile from '@/components/Profile/Profile';
import useResponsive from '@/utils/useResponsive';

function ProfileList({ items, onClick }) {
  const BREAK_POINT = 768;
  const { isMobile } = useResponsive();

  return (
    <ul className={`flex h-[56px] ${isMobile ? 'w-[208px]' : 'w-full'} flex-wrap gap-2`}>
      {items.map((item, idx) => {
        return (
          <li key={idx}>
            <Profile
              size={(isMobile && 'small') || 'medium'}
              src={item}
              onClick={() => onClick(item)}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ProfileList;
