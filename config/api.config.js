export default {
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'node',
    extensionsToTreatAsEsm: ['.ts'],
    rootDir: '..',
    testMatch: ['<rootDir>/**/tests_api/**/*.spec.ts'],
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            {
                useESM: true,
                tsconfig: '<rootDir>/tsconfig.json'
            }
        ]
    },
    timeout: 30000
};
