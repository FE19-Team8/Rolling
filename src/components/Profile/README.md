# Profile 컴포넌트

## Props

| Prop       | 타입                       | 기본값            | 설명                        |
| ---------- | -------------------------- | ----------------- | --------------------------- |
| `src`      | `string`                   | -                 | 프로필 이미지 URL           |
| `alt`      | `string`                   | `'프로필 이미지'` | 이미지 대체 텍스트          |
| `size`     | `small \| medium \| large` | `md`              | 프로필 크기                 |
| `selected` | `boolean`                  | `false`           | 선택된 상태 (보라색 테두리) |
| `bordered` | `boolean`                  | `false`           | 일반 테두리 (흰색 테두리)   |
| `onClick`  | `() => void`               | -                 | 클릭 이벤트 핸들러          |

## 기본 사용법

```jsx
import Profile from './components/Profile';

// 기본 프로필
<Profile src="/user1.jpg" />

// 크기 변경
<Profile src="/user2.jpg" size="lg" />

// 선택된 상태
<Profile src="/user3.jpg" selected />

// 테두리 있는 프로필
<Profile src="/user4.jpg" bordered />

// 클릭 가능한 프로필
<Profile
  src="/user5.jpg"
  onClick={() => console.log('프로필 클릭')}
/>

// 기본 이미지 (회색 원 안에 디폴트 아이콘 표시)
// size에 따라 아이콘 패딩이 달라짐 (small=p-2, medium=p-4, large=p-6)
<Profile />
```

## 선택 상태 관리 예시

```jsx
const [selectedUser, setSelectedUser] = useState(null);

<Profile
  src="/user1.jpg"
  selected={selectedUser === 'user1'}
  onClick={() => setSelectedUser('user1')}
/>
<Profile
  src="/user2.jpg"
  selected={selectedUser === 'user2'}
  onClick={() => setSelectedUser('user2')}
/>
```
