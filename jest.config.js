module.exports = {
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.test.json' }]
  },
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/testSetupFile.ts']
};
