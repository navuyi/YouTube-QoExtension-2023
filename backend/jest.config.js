/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ["**/?(*.)+(spec|test).[t]s?(x)"], // only testing on *.test.ts
    //moduleDirectories: ['node_modules', '<rootDir>']
};