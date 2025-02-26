/* eslint-disable */

// @ts-expect-error
import { createEcmaScriptPlugin } from '@bufbuild/protoplugin'

import { generateTs }             from './protoc-gen.abstractions.js'

export const protocGenAbstractions = createEcmaScriptPlugin({
  name: 'protoc-gen-abstractions',
  version: '0.0.1',
  generateTs,
})
