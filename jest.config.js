module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  /** @link https://github.com/zeit/next.js/issues/8663 */
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.jest.json',
    },
  },
  /** @link https://stackoverflow.com/questions/50863312/jest-gives-cannot-find-module-when-importing-components-with-absolute-paths */
  moduleDirectories: ['node_modules', '<rootDir>'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/src/__tests__/data',
    '<rootDir>/src/__tests__/mocks',
  ],
  /** @link https://stackoverflow.com/questions/47541393/syntaxerror-invalid-or-unexpected-token-import */
  moduleNameMapper: {
    'typeface-montserrat': '<rootDir>/src/__tests__/mocks/style.mock.js',
  },
}
