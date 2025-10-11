export const MOCK_MESSAGES = Array.from({ length: 60 }, (_z, i) => ({
  id: i + 1,
  sender: `보낸이 ${i + 1}`,
  profileImageURL: '/images/default_profile.png',
  relationship: (i + 1) % 2 === 0 ? '친구' : '가족',
  content: `🎉 축하 메시지 ${i + 1}번째입니다. 오늘도 행복한 하루 되세요!`,
  font: 'Pretendard',
  createdAt: new Date(2023, 10, (i % 30) + 1).toISOString(),
}));
