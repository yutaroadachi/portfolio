const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  /** @link https://stackoverflow.com/questions/47541393/syntaxerror-invalid-or-unexpected-token-import */
  moduleNameMapper: {
    'typeface-montserrat': '<rootDir>/src/__tests__/mocks/style.mock.js',
  },
  roots: ['<rootDir>/src/'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/src/__tests__/mocks/',
    '<rootDir>/src/__tests__/utils.tsx',
  ],
}

module.exports = createJestConfig(customJestConfig)
