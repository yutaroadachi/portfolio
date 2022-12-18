const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  roots: ['<rootDir>/src/'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/src/__tests__/utils.tsx',
  ],
}

module.exports = createJestConfig(customJestConfig)
