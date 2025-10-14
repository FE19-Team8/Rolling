import { useState } from 'react';
import DOMPurify from 'dompurify';

import Divider from '@/components/Divider/Divider';
import Profile from '@/components/Profile/Profile';
import Button from '@/components/Button/Button';

import Badge from '../Badge/Badge';
import ModalWrapper from '../Modal/ModalWrapper';
import MessageContent from '../Modal/MessageContent';

const MessageCard = ({
  sender,
  messageId,
  profileImageURL,
  relationship,
  content,
  font,
  createdAt,
  deletable = false,
  onDelete,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const date = createdAt.slice(0, 10).replace(/-/g, '.');
  const safeHTML = DOMPurify.sanitize(content);

  const fontMap = {
    pretendard: 'Pretendard',
    'Noto Sans': 'NotoSans',
    나눔명조: 'NanumMyeongjo',
    '나눔손글씨 손편지체': 'NanumLetter',
    핑크퐁: 'Pinkfong',
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const baseStyle = `
    flex flex-col justify-between p-6 ph-7 h-70 bg-white rounded-2xl shadow-[0_2px_12px_0_#00000014]
    hover:cursor-pointer hover:shadow-lg
  `;

  return (
    <>
      <div className={baseStyle} onClick={() => setIsOpen(true)}>
        {/* SENDER */}
        <div>
          {/* HEAD */}
          <div className="mb-[15px] flex items-start">
            <div className="flex flex-1 gap-[14px]">
              <Profile src={profileImageURL} bordered />
              <div>
                <span className="flex gap-[6px]">
                  <span className="text-[20px] leading-6">From. </span>
                  <span className="text-[20px] leading-6 font-bold">{sender}</span>
                </span>
                <Badge relationship={relationship} />
              </div>
            </div>
            {/* DELETE */}
            {deletable && (
              <Button
                variant="outlined"
                size="custom"
                paddingX={8}
                paddingY={8}
                iconName="delete"
                className="ml-auto self-start rounded-[12px]"
                onClick={(event) => {
                  event.stopPropagation();
                  onDelete?.(messageId);
                }}
              />
            )}
          </div>
          <Divider />
          {/* CONTENT */}
          <div className="py-[16px]">
            <span
              className="text-gray600 line-clamp-4 text-lg leading-7 tracking-[-0.01em]"
              style={{ fontFamily: fontMap[font] || 'Pretendard' }}
              dangerouslySetInnerHTML={{ __html: safeHTML }}
            />
          </div>
        </div>
        {/* DATE */}
        <div>
          <span className="text-gray400 text-xm">{date}</span>
        </div>
      </div>
      {isOpen && (
        <ModalWrapper onClose={() => setIsOpen(false)}>
          <MessageContent
            sender={sender}
            profileImageURL={profileImageURL}
            relationship={relationship}
            content={content}
            font={font}
            createdAt={createdAt}
            onClose={onClose}
          />
        </ModalWrapper>
      )}
    </>
  );
};

export default MessageCard;
