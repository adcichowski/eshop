import { MDXRemote } from "next-mdx-remote";
import React from "react";

import type { MDXRemoteSerializeResult } from "next-mdx-remote";

export function ProductDescription({
  productDescription,
}: {
  readonly productDescription: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
}) {
  return (
    <div className="col-span-2">
      <div>
        <h2 className="text-2xl mb-2">Product Description</h2>
      </div>
      <div className="text-sm">
        <MDXRemote {...productDescription} />
      </div>
    </div>
  );
}
