module.exports = {
  /** @link https://stackoverflow.com/questions/50863312/jest-gives-cannot-find-module-when-importing-components-with-absolute-paths */
  moduleDirectories: ['node_modules', '<rootDir>'],
  /** @link https://stackoverflow.com/questions/47541393/syntaxerror-invalid-or-unexpected-token-import */
  moduleNameMapper: {
    'typeface-montserrat': '<rootDir>/src/__tests__/mocks/style.mock.js',
  },
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/src/__tests__/data',
    '<rootDir>/src/__tests__/mocks',
    '<rootDir>/src/__tests__/utils',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
}
