import React from 'react';
import Profile from '@/components/Profile/Profile';

function ProfileList({ items, onClick }) {
  return (
    <ul className="flex h-[56px] w-full gap-2">
      {items.map((item, idx) => {
        return (
          <li key={idx}>
            <Profile src={item} onClick={() => onClick(item)} />
          </li>
        );
      })}
    </ul>
  );
}

export default ProfileList;
