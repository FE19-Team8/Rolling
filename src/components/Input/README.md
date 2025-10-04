# Input 컴포넌트

## Props

| Prop           | Type       | Default  | Description               |
| -------------- | ---------- | -------- | ------------------------- |
| `placeholder`  | `string`   | -        | 플레이스홀더 텍스트       |
| `value`        | `string`   | -        | 입력값                    |
| `onChange`     | `function` | -        | 값 변경 이벤트 핸들러     |
| `type`         | `string`   | `'text'` | 입력 타입                 |
| `disabled`     | `boolean`  | `false`  | 비활성화 상태             |
| `error`        | `boolean`  | `false`  | 에러 상태                 |
| `errorMessage` | `string`   | -        | 에러 메시지               |
| `className`    | `string`   | -        | 추가 커스텀 클래스        |
| `...props`     | -          | -        | 기본 input 속성 전달 가능 |

---

## 기본 사용법

```jsx
import Input from './components/Input';

// 기본 입력 필드
<Input placeholder="이름을 입력하세요" />

// 제어 컴포넌트
const [name, setName] = useState('');
<Input
  placeholder="이름을 입력하세요"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

// 에러 상태
<Input
  placeholder="이메일을 입력하세요"
  error
  errorMessage="올바른 이메일을 입력해주세요"
/>

// 비활성화 상태
<Input
  placeholder="수정할 수 없음"
  disabled
/>

// 커스텀 클래스 적용
<Input
  placeholder="클래스 추가"
  className="bg-yellow-50"
/>
```
