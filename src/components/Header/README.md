# Header 컴포넌트

상단 네비게이션 바 역할을 수행하는 컴포넌트 입니다.

## Props

| Prop                | Type         | Default            | Description                            |
| ------------------- | ------------ | ------------------ | -------------------------------------- |
| `Maps`              | `() => void` | `function`         | useNavigate Hook. 로고 및 버튼 클릭     |
|                     |              |                    | 시 다른 경로로 이동시키는 라우팅 함수    |
| `location`          | `object`     | `{ pathname: '/' }`| useLocation Hook. 현재 경로 정보. 초기  |
|                     |              |                    | 렌더링 시 보통 메인 경로(/)를 가리킵니다.|
| `isPostPage`        | `boolean`    | `false`            | 현재 경로가 /post인지 판단하는 상수.     |
|                     |              |                    | (초기 경로가 /이므로 false).            |
| `logoHovered`       | `boolean`    | `false`            | useState Hook. 로고에 마우스가          |
|                     |              |                    | 올라왔는지(Hover) 여부를 추적하는 상태.  |
| `handleLogoClick`   | `() => void` | `function`         | 로고 클릭 시 홈 페이지(/)로 이동시키는   |
|                     |              |                    | 핸들러.                                |
| `handleCreateClick` | `() => void` | `function`         | '롤링 페이퍼 만들기' 버튼 클릭 시 /post  |
|                     |              |                    | 페이지로 이동시키는 핸들러.              |

## 기본 사용법

```jsx
import Header from './components/Header';

// 최상위 레이아웃 컴포넌트 예시

function AppLayout() {
  return (
    <div className="min-h-screen">
      {/* 1. 기본 사용 */}
      <Header />
      
      {/* 나머지 페이지 콘텐츠 (라우팅 영역) */}
      <main className="pt-20">...</main>
    </div>
  );
}
```
