module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "no-unused-vars": "off",	// 코드상에 실제로 사용하지 않는 변수가 있을때 오류로 알려주는 기능인데 옵션을 끈다!
    "react/prop-types": "off",	// 나중에 리액트를 다 배우고 나서 좀더 안전하게 사용하게 해주는 옵션인데, 실습중에는 불편하게 하므로 끈다!
  },
}
