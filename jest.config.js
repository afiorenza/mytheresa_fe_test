module.exports = {
  clearMocks: true,

  collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],

  coverageDirectory: 'coverage',

  moduleFileExtensions: ['js', 'json', 'jsx'],

  setupFiles: ['<rootDir>/enzyme.config.js'],

  testEnvironment: 'jsdom',

  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],

  testPathIgnorePatterns: ['\\\\node_modules\\\\'],

  testURL: 'http://localhost',

  transformIgnorePatterns: ['<rootDir>/node_modules/'],

  verbose: false,

  moduleNameMapper:{
    '\\.(scss)$': '<rootDir>/__mocks__/styleMock.js',
    '^actions(.*)$': '<rootDir>/src/actions$1',
    '^assets(.*)$': '<rootDir>/src/assets$1',
    '^components(.*)$': '<rootDir>/src/components/index.js$1',
    '^reducers(.*)$': '<rootDir>/src/reducers$1',
    '^utils(.*)$': '<rootDir>/src/utils$1',
    '^views(.*)$': '<rootDir>/src/views$1'
  }
};
