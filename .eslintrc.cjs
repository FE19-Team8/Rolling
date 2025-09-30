module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    amd: true,
  },
  globals: {
    module: 'readonly',
    define: 'readonly',
    global: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  rules: {
    // =====================
    // 네이밍 규칙
    // =====================
    'id-length': ['error', { min: 2 }],             // 변수명 최소 2글자
    camelcase: ['error', { properties: 'always' }], // camelCase 사용 강제
    'new-cap': ['error', { newIsCap: true }],       // 생성자 함수는 대문자로 시작
    'no-restricted-syntax': [                       // this 사용 금지
      'error',
      {
        selector: 'ThisExpression',
      },
    ],
    'prefer-const': 'error',                        // 재할당 없는 변수는 const 사용
    'no-var': 'error',                              // var 사용 금지
    'no-unused-vars': ['warn', {                    // 사용하지 않는 변수 경고
      vars: 'all',
      args: 'after-used',
      ignoreRestSiblings: true,
    }],

    // =====================
    // 포맷팅 규칙
    // =====================
    quotes: ['error', 'single'],                    // 작음 따옴표 사용
    semi: ['error', 'always'],                      // 세미콜론 필수
    indent: ['error', 2, { SwitchCase: 1 }],        // 들여쓰기 2칸 사용, switch문 case는 1칸 들여쓰기

    // =====================
    // React 관련
    // =====================
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: { version: 'detect' },
  },
};
