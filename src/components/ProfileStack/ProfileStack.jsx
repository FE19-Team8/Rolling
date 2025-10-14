import clsx from 'clsx';

import Profile from '@/components/Profile/Profile';

const ProfileStack = ({ profiles = [], remainingCount, onClick }) => {
  const visibleProfiles = profiles.slice(0, 3);

  return (
    <div className="flex items-center">
      {visibleProfiles.map((profile, index) => (
        <div
          key={profile.id || index}
          className={clsx(
            'relative',
            index > 0 && '-ml-2.5', // -10px
            `z-[${index + 1}]`
          )}
        >
          <Profile
            src={profile.src}
            alt={profile.alt || `프로필 ${index + 1}`}
            size="small"
            bordered
            onClick={onClick}
          />
        </div>
      ))}

      {remainingCount > 0 && (
        <div
          className={clsx(
            'relative flex h-7 min-w-7 items-center justify-center rounded-full border border-gray-300 bg-white px-1 text-xs font-medium text-gray-600',
            'z-[4] -ml-2.5'
          )}
        >
          {remainingCount > 99 ? '99+' : `+${remainingCount}`}
        </div>
      )}
    </div>
  );
};
export default ProfileStack;
