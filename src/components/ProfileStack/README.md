# ProfileStack 컴포넌트

## 기본 사용법

```jsx
import ProfileStack from './components/ProfileStack';

// 기본 사용법
<ProfileStack
  profiles={[
    {id: 1, src: "/user1.jpg"},
    {id: 2, src: "/user2.jpg"},
    {id: 3, src: "/user3.jpg"}
  ]}
  remainingCount={6}
/>

// 프로필 1개만
<ProfileStack
  profiles={[{id: 1, src: "/user1.jpg"}]}
  remainingCount={8}
/>

// 프로필 2개
<ProfileStack
  profiles={[
    {id: 1, src: "/user1.jpg"},
    {id: 2, src: "/user2.jpg"}
  ]}
  remainingCount={7}
/>

// 클릭 이벤트
<ProfileStack
  profiles={profiles}
  remainingCount={5}
  onClick={() => handleStackClick()}
/>

// 남은 인원 없음 (+숫자 표시 안됨)
<ProfileStack
  profiles={[
    {id: 1, src: "/user1.jpg"},
    {id: 2, src: "/user2.jpg"}
  ]}
  remainingCount={0}
/>
```

## Props

| Prop             | 타입                     | 기본값 | 설명                 |
| ---------------- | ------------------------ | ------ | -------------------- |
| `profiles`       | `Array<{id, src, alt?}>` | `[]`   | 프로필 데이터 배열   |
| `remainingCount` | `number`                 | `0`    | 남은 인원 수 (+숫자) |
| `onClick`        | `() => void`             | -      | 클릭 이벤트 핸들러   |
