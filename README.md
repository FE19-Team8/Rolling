# Rolling

## 소개

**메시지 작성·수정·삭제, 이모지 반응, 모달·토스트 UI** 등  
다양한 기능을 제공하는 **웹 기반 롤링페이퍼 앱**입니다.

기간 : `2025-09-24` ~ `2025-10-16` (약 3주)

## 목차

- [팀원 및 역할](#팀원-및-역할)
- [프로젝트 목표](#프로젝트-목표)
- [주요 기능](#주요-기능)
- [기술 스택](#기술-스택)
- [프로젝트 구조](#프로젝트-구조)
- [설치 및 실행](#설치-및-실행)
- [환경변수 설정](#환경변수-설정)
- [배포 링크](#배포-링크)
- [동작 시연](#동작-시연)
- [개선 계획](#개선-계획)
- [회고](#회고)

## 팀원 및 역할

`[팀장]`

방다연

- 프로젝트 생성 및 세팅
- 디자인 토큰 정의
- `/list` 페이지 구현

`[팀원]`

김동영

- User Flow 문서 작성
- 공통 헤더 구현
- `/` 메인 페이지 구현

김준열

- Husky + Linter + Prettier 세팅
- `/post` 페이지 구현 구현

노혁

- README 작성
- 프로젝트 매니저
- `/post/{id}/message` 페이지 구현

박유진

- 디자인 토큰 정의
- 프로젝트 매니저
- `공통 컴포넌트` 구현

## 프로젝트 목표

본 프로젝트는 제공된 기능 요구사항, 디자인(Figma), API 명세(Swagger)를 기반으로  
온라인 롤링페이퍼 서비스를 구현하는 것을 목표로 합니다.

## 주요 기능

- **롤링페이퍼 목록 조회**: 인기순, 최신순 정렬로 리스트 확인

- **롤링페이퍼 관리**: 작성한 롤링페이퍼 삭제 기능 제공

- **이모지 반응**: 롤링페이퍼에 다양한 이모지로 감정 표현 가능

- **메시지 참여 현황**: 롤링페이퍼에 남겨진 메시지 인원 수 조회

- **메시지 작성**: 리치 텍스트 에디터를 활용해 새로운 메시지 작성

- **모달 & 토스트 알림**: 메시지 클릭 시 모달로 상세 보기, URL 공유 시 토스트 알림 표시

## 기술 스택

![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white)

**패키지 매니저**  
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=flat&logo=pnpm&logoColor=white)

## 프로젝트 구조

```graphql
src
├── api             # HTTPS 요청 api
├── assets          # 정적 리소스(이미지, 아이콘 등)
├── components      # 공용 UI 컴포넌트
├── pages           # 페이지 컴포넌트
│   ├── EditPage
│   ├── ListPage
│   ├── MainPage
│   ├── MessagePage
│   ├── PostedPage
│   ├── PostingPage
│   └── ErrorPage
├── utils           # Helper함수
├── App.jsx         # 루트 컴포넌트
├── App.css         # 전역 스타일
├── globals.css     # 공통 CSS
└── main.jsx        # 진입점
```

## 설치 및 실행

```bash
## node v22.14.0

git clone https://github.com/FE19-Team8/Rolling.git
cd Rolling
pnpm install
pnpm run dev

## 브라우저 확인
http://localhost:5173 (기본값, 환경에 따라 달라질 수 있음)
```

## 배포링크

- [링크](https://fe19-team8.netlify.app/)

## 동작 시연

- (추가 예정)

## 회고

- (추가 예정)
