/* eslint-disable no-undef */

module.exports = {
  roots: ['src'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testPathIgnorePatterns: ['node_modules/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.(css|styl|less|sass|scss|png|jpg|svg|gif|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
  testMatch: ['**/*.test.(ts|tsx)'],
  moduleNameMapper: {
    // Mocks out all these file formats when tests are run.
    '^.+\\.(css|styl|less|sass|scss|png|jpg|svg|gif|ttf|woff|woff2)$':
      'jest-transform-stub',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
