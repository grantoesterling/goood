import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema:
    'https://7g3k9sy8.api.sanity.io/v2023-08-01/graphql/production/default',
  documents: ['./src/**/*.graphql'],
  generates: {
    'src/generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-resolvers',
        'typed-document-node',
      ],
    },
  },
}

export default config
