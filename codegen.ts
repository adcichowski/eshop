import type { CodegenConfig } from "@graphql-codegen/cli";

import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

const config = {
  overwrite: true,
  schema:
    "https://api-eu-central-1.hygraph.com/v2/cl5zbzm8w367c01t32ivxf8ze/master",
  documents: "lib/graphql/**/*.graphql",
  generates: {
    "lib/hygraph/generated/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: false,
        dedupeFragments: true,
      },
      config: {
        useTypeImports: true,
        defaultScalarType: "unknown",
        skipTypename: true,
        documentMode: "string",
        exportFragmentSpreadSubTypes: true,
        dedupeFragments: true,
        scalars: {
          _Any: "unknown",
          Date: "string",
          DateTime: "string",
          Decimal: "number",
          JSON: "unknown",
          JSONString: "string",
          PositiveDecimal: "number",
        },
      },
    },
  },
} satisfies CodegenConfig;
export default config;
