import Badge from '../Badge/Badge';
import Divider from '@/components/Divider/Divder';
import Profile from '@/components/Profile/Profile';

const EX = {
  sender: '김동훈',
  profileImageURL: '/images/default_profile.png',
  relationship: '가족',
  content:
    '코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요! 그리고 저는 방금 테마를 바꿨어요 아까는 줄바꿈이 안되더니 왜 갑자기 될까요? 이유를 알수가 없네요 둘리~ 둘리~ 요리보고~ 저리봐도 알 수 없는 레이레이~~',
  font: 'Pretendard',
  createdAt: '2023-11-01T08:05:25.399056Z',
};

const MessageCard = ({
  sender = EX.sender,
  profileImageURL = EX.profileImageURL,
  relationship = EX.relationship,
  content = EX.content,
  font = EX.font,
  createdAt = EX.createdAt,
}) => {
  const date = createdAt.slice(0, 10).replace(/-/g, '.');

  return (
    <div className="flex flex-col justify-between p-[24px] ph-[28px] w-[384px] h-[280px] rounded-[16px] shadow-[0_2px_12px_0_#00000014]">
      {/* SENDER */}
      <div>
        {/* HEAD */}
        <div className="flex gap-[14px] mb-[15px]">
          <Profile src={profileImageURL} bordered />
          <div>
            <span className="flex gap-[6px]">
              <span className="text-[20px] leading-[24px]">From. </span>
              <span className="text-[20px] leading-[24px] font-bold">
                {sender}
              </span>
            </span>
            <Badge relationship={relationship} />
          </div>
        </div>
        <Divider />
        {/* CONTENT */}
        <div className="py-[16px]">
          <span
            className="text-gray600 text-[18px] leading-[28px] tracking-[-0.01em] line-clamp-4"
            style={{ fontFamily: font }}
          >
            {content}
          </span>
        </div>
      </div>
      {/* DATE */}
      <div>
        <span className="text-gray400 text-[12px] tracking-[-0.005em]">
          {date}
        </span>
      </div>
    </div>
  );
};

export default MessageCard;
