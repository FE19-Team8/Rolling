import Profile from '@/components/Profile/Profile';
import Divider from '@/components/Divider/Divider';
import Badge from '../Badge/Badge';
import Button from '@/components/Button/Button';

const MessageContent = ({
  sender,
  profileImageURL,
  relationship,
  content,
  font,
  createdAt,
  onClose,
}) => {
  const date = createdAt.slice(0, 10).replace(/-/g, '.');

  const contentStyle = `
    pr-4 my-4 w-130 h-60
    text-gray600 text-lg leading-7 tracking-[-0.01em]
    overflow-y-auto custom-scrollbar
  `;

  return (
    <div className="ph-7 flex h-54 flex-col p-6">
      {/* HEAD */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex gap-4">
          <Profile src={profileImageURL} bordered />
          <div>
            <span className="flex gap-[6px]">
              <span className="text-xl leading-6">From. </span>
              <span className="text-xl leading-6 font-bold">{sender}</span>
            </span>
            <Badge relationship={relationship} />
          </div>
        </div>
        <span className="text-gray400 text-xs">{date}</span>
      </div>
      {/* CONTENT */}
      <div>
        <Divider />
        <div className={contentStyle} style={{ fontFamily: font }}>
          {content}
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center">
        <Button onClick={onClose}>확인</Button>
      </div>
    </div>
  );
};

export default MessageContent;
