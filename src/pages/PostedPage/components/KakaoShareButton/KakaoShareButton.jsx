import { useEffect } from 'react';

export default function KakaoShareButton({ className, children, name, recipientId }) {
  const url = 'https://rolling-xsll.vercel.app'; // 배포 주소
  const shareUrl = `${url}/redirect?to=/post/${recipientId}/message`;

  const images = [
    `${url}/shareImages/image01.png`,
    `${url}/shareImages/image02.png`,
    `${url}/shareImages/image03.png`,
  ];
  const getRandomImage = () => {
    const index = Math.floor(Math.random() * images.length);
    return images[index];
  };

  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init('ec9362736eeb9743ce6ab9123147857e');
    }
  }, []);

  const shareKakao = () => {
    if (!window.Kakao) return;

    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'Rolling',
        description: '친구야 나한테 롤링페이퍼 써볼래?',
        imageUrl: getRandomImage(),
        link: {
          webUrl: `${url}/post/${recipientId}/message`,
        },
      },
      // social: {
      //   likeCount: 10,
      //   commentCount: 20,
      // },
      buttons: [
        {
          title: `${name}에게 롤링페이퍼 남기기`,
          link: {
            webUrl: shareUrl,
            mobileWebUrl: shareUrl,
          },
        },
      ],
    });
  };

  return (
    <button onClick={shareKakao} className={className}>
      {children}
    </button>
  );
}
