import type { Schema } from '@bufbuild/protoplugin/ecmascript'

export const generateTs = (schema: Schema): void => {
  const serviceFile = schema.files.find((file) => file.services.length > 0)

  if (!serviceFile) {
    throw new Error('No service file found')
  }

  const file = schema.generateFile('config.ts')

  file.preamble(serviceFile)

  file.print(`import path from 'node:path'

const dirname = path.dirname(new URL(import.meta.url).pathname)

export const packageName = '${serviceFile.proto.package}'

export const serviceName = '${serviceFile.proto.service[0].name}'

export const servicePath = path.join(dirname, '../${serviceFile?.name}.proto')

export const includeDirs = [path.join(dirname, '../')]`)
}
