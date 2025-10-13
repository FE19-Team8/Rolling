import { useState } from 'react';

import Badge from '../Badge/Badge';
import Divider from '@/components/Divider/Divider';
import Profile from '@/components/Profile/Profile';

import ModalWrapper from '../Modal/ModalWrapper';
import MessageContent from '../Modal/MessageContent';

const MessageCard = ({ sender, profileImageURL, relationship, content, font, createdAt }) => {
  const [isOpen, setIsOpen] = useState(false);
  const date = createdAt.slice(0, 10).replace(/-/g, '.');

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
          <div className="mb-[15px] flex gap-[14px]">
            <Profile src={profileImageURL} bordered />
            <div>
              <span className="flex gap-[6px]">
                <span className="text-[20px] leading-6">From. </span>
                <span className="text-[20px] leading-6 font-bold">{sender}</span>
              </span>
              <Badge relationship={relationship} />
            </div>
          </div>
          <Divider />
          {/* CONTENT */}
          <div className="py-[16px]">
            <span
              className="text-gray600 line-clamp-4 text-lg leading-7 tracking-[-0.01em]"
              style={{ fontFamily: font }}
            >
              {content}
            </span>
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
