# Skeleton 컴포넌트

데이터 로딩 상태에서 콘텐츠가 표시되기 전,
사용자에게 시각적 피드백을 제공하는 공용 스켈레톤 컴포넌트입니다.

## Props

| Prop      | 타입                     | 기본값 | 설명                    |
| --------- | ------------------------ | ------ | ----------------------- |
| variant   | `base \| purple`         | `base` | 배경색 및 스타일 지정   |
| shape     | `rect \| circle \| text` | `rect` | 스켈레톤 형태 지정      |
| width     | `string`                 | -      | 스켈레톤 가로 길이 지정 |
| height    | `string`                 | -      | 스켈레톤 세로 길이 지정 |
| className | `string`                 | -      | 추가 Tailwind 클래스    |

## 사용법

| 형태        | 설명                      |
| ----------- | ------------------------- |
| 🟪 `rect`   | 카드, 썸네일, 이미지 영역 |
| ⚪ `circle` | 프로필, 아이콘 자리       |
| ▬ `text`    | 텍스트 줄 자리            |

```jsx
import Skeleton from '@/components/Skeleton/Skeleton';

// 기본 사각형 스켈레톤
<Skeleton width="200px" height="20px" />

// 보라색 배경 스켈레톤
<Skeleton variant="purple" width="200px" height="20px" />

// 원형 (프로필 아바타)
<Skeleton shape="circle" width="80px" height="80px" />

// 텍스트 라인 형태
<Skeleton shape="text" width="75%" height="14px" />

// Tailwind 클래스 추가
<Skeleton className="rounded-xl shadow-sm" width="100%" height="160px" />
```
