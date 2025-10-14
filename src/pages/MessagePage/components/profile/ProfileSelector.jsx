import { getProfileImages } from '@/api/images';
import { useState, useEffect, useRef } from 'react';
import ProfileList from './ProfileList';
import Profile from '@/components/Profile/Profile';
import Skeleton from '@/components/Skeleton/Skeleton';

function ProfileSelector({ onSelect }) {
  const [selected, setSelected] = useState(null);
  const [profileImgs, setProfileImgs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const isMountedRef = useRef(false);
  const DEFAULT_IMG_IDX = 0;

  useEffect(() => {
    if (isMountedRef.current) return;
    const fetchProfiles = async () => {
      try {
        const { imageUrls } = await getProfileImages();
        setSelected(imageUrls[DEFAULT_IMG_IDX]);
        onSelect(imageUrls[DEFAULT_IMG_IDX]);
        setProfileImgs(imageUrls.slice(DEFAULT_IMG_IDX + 1));
      } catch (err) {
        throw new Error(`${err}: 프로필 이미지 받아오기에 실패하였습니다.`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  if (isLoading) {
    return <ProfileSelectorSkeleton />;
  }

  return (
    <fieldset className={'flex h-[142px] w-[320px] items-center gap-8 py-2 md:w-[707px]'}>
      <Profile src={selected} size="large" />
      <div className="flex flex-col gap-4">
        <legend className="text-gray-500">프로필 이미지를 선택해주세요!</legend>
        <ProfileList
          items={profileImgs}
          onClick={(img) => {
            setSelected(img);
            onSelect(img);
          }}
        />
      </div>
    </fieldset>
  );
}

const ProfileSelectorSkeleton = () => {
  const PROFILE_IMG_LENGTH = 9;

  return (
    <div className="flex h-[142px] w-[717px] items-center gap-8 py-2">
      <Skeleton shape="circle" width="80px" height="80px" />

      <div className="flex flex-col gap-4">
        <Skeleton shape="text" width="200px" height="24px" />
        <div className="flex h-[56px] w-full gap-2">
          {[...Array(PROFILE_IMG_LENGTH)].map((__, index) => (
            <Skeleton key={index} shape="circle" width="56px" height="56px" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileSelector;
