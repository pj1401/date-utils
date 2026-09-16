import { createDefaultEsmPreset, createDefaultPreset } from 'ts-jest'

const tsJestTransformCfg = createDefaultPreset().transform
const presetConfig = createDefaultEsmPreset({})

/** @type {import("jest").Config} **/
export default {
  ...presetConfig,
  testEnvironment: 'node',
  transform: {
    ...tsJestTransformCfg,
    '^.+\\.ts?$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: 'tsconfig.test.json',
      },
    ],
    '\\.[jt]sx?$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: 'tsconfig.test.json',
      },
    ],
  },
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '(.+)\\.js': '$1',
  },
}
