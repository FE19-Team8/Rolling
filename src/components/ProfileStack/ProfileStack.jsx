import Profile from "../Profile/Profile";
import clsx from "clsx";

const ProfileStack = ({ profiles = [], remainingCount, onClick }) => {
  const visibleProfiles = profiles.slice(0, 3);

  return (
    <div className="flex items-center">
      {visibleProfiles.map((profile, index) => (
        <div
          key={profile.id || index}
          className={clsx(
            "relative",
            index > 0 && "-ml-2.5", // -10px
            `z-[${index + 1}]`
          )}
        >
          <Profile
            src={profile.src}
            alt={profile.alt || `프로필 ${index + 1}`}
            size="sm"
            bordered
            onClick={onClick}
          />
        </div>
      ))}

      {remainingCount > 0 && (
        <div
          className={clsx(
            "relative flex items-center justify-center bg-white rounded-full border border-gray-300 text-gray-600 font-medium min-w-7 h-7 px-1 text-xs",
            "-ml-2.5 z-[4]"
          )}
        >
          {remainingCount > 99 ? "99+" : `+${remainingCount}`}
        </div>
      )}
    </div>
  );
};
export default ProfileStack;
