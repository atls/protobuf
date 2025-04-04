/* eslint-disable */

import type { DescEnum }      from '@bufbuild/protobuf'
import type { DescField }     from '@bufbuild/protobuf'
import type { DescMessage }   from '@bufbuild/protobuf'
import type { DescOneof }     from '@bufbuild/protobuf'
import type { GeneratedFile } from '@bufbuild/protoplugin/ecmascript'
import type { Printable }     from '@bufbuild/protoplugin/ecmascript'
import type { Schema }        from '@bufbuild/protoplugin/ecmascript'

import { getFieldTyping }     from '@bufbuild/protoplugin/ecmascript'
import { localName }          from '@bufbuild/protoplugin/ecmascript'
import { makeJsDoc }          from '@bufbuild/protoplugin/ecmascript'

export function generateTs(schema: Schema) {
  for (const file of schema.files) {
    const f = schema.generateFile(file.name + '_pb.ts')
    f.preamble(file)
    for (const enumeration of file.enums) {
      generateEnum(schema, f, enumeration)
    }
    for (const message of file.messages) {
      generateMessage(schema, f, message)
    }
  }
}

function generateEnum(_: Schema, f: GeneratedFile, enumeration: DescEnum) {
  f.print(makeJsDoc(enumeration))
  f.print('export enum ', enumeration, ' {')
  for (const value of enumeration.values) {
    if (enumeration.values.indexOf(value) > 0) {
      f.print()
    }
    f.print(makeJsDoc(value, '  '))
    f.print('  ', localName(value), ' = ', value.number, ',')
  }
  f.print('}')
  f.print()
}

function generateMessage(schema: Schema, f: GeneratedFile, message: DescMessage) {
  f.print(makeJsDoc(message))
  f.print('export interface ', message, ' {')
  for (const member of message.members) {
    switch (member.kind) {
      case 'oneof':
        generateOneof(schema, f, member)
        break
      default:
        generateField(schema, f, member)
        break
    }
    f.print()
  }

  f.print('}')
  f.print()

  for (const nestedEnum of message.nestedEnums) {
    generateEnum(schema, f, nestedEnum)
  }
  for (const nestedMessage of message.nestedMessages) {
    generateMessage(schema, f, nestedMessage)
  }
}

function generateOneof(_: Schema, f: GeneratedFile, oneof: DescOneof) {
  f.print(makeJsDoc(oneof, '  '))
  f.print('  ', localName(oneof), ': {')
  for (const field of oneof.fields) {
    if (oneof.fields.indexOf(field) > 0) {
      f.print(`  } | {`)
    }
    f.print(makeJsDoc(field, '    '))
    const { typing } = getFieldTyping(field, f)
    f.print(`    value: `, typing, `;`)
    f.print(`    case: "`, localName(field), `";`)
  }
  f.print(`  } | { case: undefined; value?: undefined };`)
}

function generateField(_: Schema, f: GeneratedFile, field: DescField) {
  const e: Printable = []

  f.print(makeJsDoc(field, '  '))

  e.push('  ', localName(field))

  const { typing, optional } = getFieldTyping(field, f)

  if (optional) {
    e.push('?: ', typing)
  } else {
    e.push(': ', typing)
  }

  e.push(';')

  f.print(e)
}
