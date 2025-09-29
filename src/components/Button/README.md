# Button 컴포넌트

재사용 가능한 버튼 컴포넌트입니다.

## Props

| Prop     | 타입                                        | 기본값      | 설명                            |
| -------- | ------------------------------------------- | ----------- | ------------------------------- |
| variant  | `primary \| secondary \| outlined \| \gray` | `primary`   | 버튼 색상/스타일                |
| size     | `small \| medium \| large \| cusotom`       | `small`     | 버튼 크기                       |
| shape    | `default \| circle`                         | `default`   | 버튼 모양                       |
| disabled | `boolean`                                   | `false`     | 버튼 비활성화 여부              |
| iconName | `string`                                    | `undefined` | 내장 아이콘 이름                |
| onClick  | `function`                                  | -           | 클릭 이벤트 핸들러              |
| type     | `number (px 단위)`                          | `undefined` | cusotom 사이즈일 때 X축 padding |
| type     | `number (px 단위)`                          | `undefined` | cusotom 사이즈일 때 Y축 padding |

## 내장 아이콘 종류

- add
- addSm
- arrowDown
- arrowLeft
- arrowRight
- check
- deleted
- edit
- plus
- share
- shareSm

## 사용법

```jsx
import Button from './components/Button';

// 기본 버튼
<Button>저장하기</Button>

// 스타일 변형
<Button variant="secondary">취소</Button>
<Button variant="outlined">더보기</Button>

// 크기 변경
<Button size="small">작은 버튼</Button> // 120px * 40px
<Button size="medium">중간 버튼</Button> // 280px * 56px
<Button size="large">큰 버튼</Button> // 100% * 56px
<Button size="compact">콤팩트 버튼</Button> // padding button

// 아이콘과 함께
<Button iconName="plus">추가</Button>
<Button shape="circle" iconName="check" />

// 원형 버튼
// shape="circle"는 고정크기여서 크기를 넣지말아주세요
<Button shape="circle" iconName="plus" />

// 비활성화
<Button disabled>비활성화</Button>

// width값이 정해지지않은 padding cusotom 버튼
 <Button size="custom" paddingX={16} paddingY={7}>
    Custom Compact
  </Button>

// 이벤트 처리
<Button onClick={() => alert('클릭!')}>클릭해보세요</Button>
```
