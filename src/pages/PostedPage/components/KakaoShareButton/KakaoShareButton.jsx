import {useEffect} from 'react';
const { Kakao }=window;

export default function KakaoShareButton() {
  const url = ""; // 배포 주소
  const resultUrl = window.location.href; // 로컬 주

  useEffect(()=> {
    Kakao.cleanup();
    Kakao.init('ec9362736eeb9743ce6ab9123147857e');  // js 키
    console.log(Kakao.isInitialized());
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'Rolling',
        description: '친구야 나한테 롤링페이퍼 써볼래?',
        imageUrl:
          'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
        link: {
          webUrl: url,
        },
      },
      // social: {
      //   likeCount: 10,
      //   commentCount: 20,
      // },
      buttons: [
        {
          title: '롤링페이퍼 쓰러 가기',
          link: {
            webUrl: url,
          },
        },
      ],
    });
  }

  return (
    <span>카카오톡 공유하기</span>
  );
};