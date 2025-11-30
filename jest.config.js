//import { createDefaultPreset } from "ts-jest";

//const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
export default {
    preset: 'ts-jest', // <- обязательно для TS
    testEnvironment: 'node', // или 'jsdom' для фронтенда
    transform: {
        '^.+\\.ts$': 'ts-jest' // <- трансформация TS файлов
    },
    testMatch: ['**/testsJest/**/*.spec.ts'], // <- пути к тестовым файлам
    //testMatch: ["**/test/**/*.spec.ts", "**/test_api/**/*.spec.ts", "**/testsJest/**/*.spec.ts"], // <- пути к тестовым файлам
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    extensionsToTreatAsEsm: ['.ts']
};
