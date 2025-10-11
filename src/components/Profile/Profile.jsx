import DefaultProfileIcon from '@/assets/icons/ic_default_profile.svg';
import clsx from 'clsx';

const VARIANT_CLASSES = {
  selected: 'border-2 border-purple-600',
  bordered: 'border-[1.5px] border-white',
};

const SIZE_CLASSES = {
  small: 'w-7 h-7', // 28px
  medium: 'w-14 h-14', // 56px
  large: 'w-20 h-20', // 80px
};

const PROFILE_IMG = {
  default: DefaultProfileIcon,
};

const Profile = ({
  src,
  alt = '프로필 이미지',
  size = 'medium',
  selected = false,
  bordered = false,
  onClick,
}) => {
  const isDefault = !src;

  const wrapperClasses = clsx(
    SIZE_CLASSES[size],
    'rounded-full transition-all',
    {
      [VARIANT_CLASSES.selected]: selected,
      [VARIANT_CLASSES.bordered]: bordered && !selected,
      'cursor-pointer hover:opacity-80': onClick,
      'bg-gray-300 flex items-center justify-center ': isDefault,
    },
  );

  return (
    <div onClick={onClick} className={wrapperClasses}>
      {isDefault ? (
        <img
          src={PROFILE_IMG.default}
          alt="기본 프로필 이미지"
          className={clsx('object-contain', {
            'p-2': size === 'small',
            'p-4': size === 'medium',
            'p-6': size === 'large',
          })}
        />
      ) : (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-full"
        />
      )}
    </div>
  );
};

export default Profile;
