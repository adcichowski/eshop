import { MDXRemote } from "next-mdx-remote";

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
        <h2 className="mb-2 text-2xl">Product Description</h2>
      </div>
      <div className="text-sm">
        <MDXRemote {...productDescription} />
      </div>
    </div>
  );
}
