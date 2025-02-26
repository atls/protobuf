/* eslint-disable */

// @ts-expect-error
import { createEcmaScriptPlugin } from '@bufbuild/protoplugin'

import { generateTs }             from './protoc-gen.interfaces.js'

export const protocGenInterfaces = createEcmaScriptPlugin({
  name: 'protoc-gen-interfaces',
  version: '0.0.1',
  generateTs,
})
