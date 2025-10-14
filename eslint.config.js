import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    plugins: {
      prettier: prettierPlugin,
      import: importPlugin,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'import/no-absolute-path': 'error',
      'import/no-named-as-default': 'off',

      // ✅ 대소문자 불일치 탐지
      'import/no-unresolved': ['error', { caseSensitive: true, ignore: ['\\.svg\\?react$'] }],

      // ✅ import 순서 자동 정렬 (선택)
      'import/order': [
        'warn',
        {
          groups: [['builtin', 'external'], ['internal'], ['parent', 'sibling', 'index']],
          'newlines-between': 'always',
        },
      ],
      // =====================
      // 네이밍 규칙
      // =====================
      'id-length': [
        'error',
        {
          min: 2, // 변수명 최소 2글자
          exceptions: ['a', 'b', 'i', 'j', 'x', 'y'], // 특정 단일 글자 변수명 허용
        },
      ],
      camelcase: ['error', { properties: 'always' }], // camelCase 사용 강제
      'new-cap': ['error', { newIsCap: true }], // 생성자 함수는 대문자로 시작
      'no-restricted-syntax': [
        'error', // this 사용 금지
        {
          selector: 'ThisExpression',
        },
      ],
      'prefer-const': 'error', // 재할당 없는 변수는 const 사용
      'no-var': 'error', // var 사용 금지
      'no-unused-vars': [
        'error',
        {
          // 사용하지 않는 변수 경고
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
          varsIgnorePattern: '^[A-Z_]', // 대문자 또는 _ 로 시작하는 변수명은 사용하지 않아도 경고하지 않음
        },
      ],

      // =====================
      // 포맷팅 규칙
      // =====================
      // quotes: ['error', 'single'], // 작음 따옴표 사용
      // semi: ['error', 'always'], // 세미콜론 필수
      // indent: ['error', 2, { SwitchCase: 1 }], // 들여쓰기 2칸 사용, switch문 case는 1칸 들여쓰기

      // =====================
      // React 관련
      // =====================
      'react/react-in-jsx-scope': 'off',

      // =====================
      // Prettier 관련
      // =====================
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: true,
          endOfLine: 'auto',
          tabWidth: 2,
          useTabs: false,
        },
      ],
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        alias: {
          map: [['@', './src']],
          extensions: ['.js', '.jsx', '.json'],
        },
      },
    },
  },
]);
