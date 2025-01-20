module.exports = {
    preset: 'ts-jest',
    testEnviroment: 'node',
    testMatch: ['**/test/**/*.test.ts'],
    collectCoverage: true,
    collectCoverageForm: ['<rootDir/src/**/*.ts']
}