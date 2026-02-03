import { createEcmaScriptPlugin } from '@bufbuild/protoplugin'

import { generateTs }             from './protoc-gen-config.js'

export const protocGenConfig = createEcmaScriptPlugin({
  name: 'protoc-gen-config',
  version: '0.0.1',
  generateTs,
})
