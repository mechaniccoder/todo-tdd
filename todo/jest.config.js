module.exports = {
  setupFiles: ['jest-plugin-context/setup'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next', '<rootDir>/node_modules'],
  snapshotResolver: '<rootDir>/config/snapshotResolver.js',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^components/(.*)': '<rootDir>/components/$1',
    '^hooks/(.*)': '<rootDir>/hooks/$1',
  },
  testRegex: '\\.test\\.[jt]sx?$',
};
