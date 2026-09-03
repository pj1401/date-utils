import { createDefaultEsmPreset, createDefaultPreset } from 'ts-jest'

const tsJestTransformCfg = createDefaultPreset().transform
const presetConfig = createDefaultEsmPreset({})

/** @type {import("jest").Config} **/
export default {
  ...presetConfig,
  testEnvironment: 'node',
  transform: {
    ...tsJestTransformCfg
  },
  moduleNameMapper: {
    '(.+)\\.js': '$1'
  },
  extensionsToTreatAsEsm: ['.ts']
}
