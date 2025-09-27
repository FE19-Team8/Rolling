import Profile from "../Profile/Profile";

const ProfileStack = ({ profiles = [], remainingCount, onClick }) => {
  const visibleProfiles = profiles.slice(0, 3);

  return (
    <div className="flex items-center">
      {/* 프로필 이미지들 (최대 3개, sm 크기 고정) */}
      {visibleProfiles.map((profile, index) => (
        <div
          key={profile.id || index}
          className="relative"
          style={{
            marginLeft: index > 0 ? "-10px" : "0",
            zIndex: index + 1,
          }}
        >
          <Profile
            src={profile.src}
            alt={profile.alt || `프로필 ${index + 1}`}
            size="sm" // sm 크기 고정
            bordered
            onClick={onClick}
          />
        </div>
      ))}

      {remainingCount > 0 && (
        <div
          className="relative flex items-center justify-center bg-white rounded-full border border-gray-300 text-gray-600 font-medium w-7 h-7 text-xs"
          style={{
            marginLeft: "-10px",
            zIndex: 4,
          }}
        >
          +{remainingCount}
        </div>
      )}
    </div>
  );
};
export default ProfileStack;
