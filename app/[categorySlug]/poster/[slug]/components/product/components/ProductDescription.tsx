import { MDXRemote } from "next-mdx-remote/rsc";

export function ProductDescription({
  description,
}: {
  readonly description: string;
}) {
  return (
    <div className="col-span-2">
      <div>
        <h2 className="my-2 text-2xl">Product Description</h2>
      </div>
      <div className="text-sm">
        <MDXRemote source={description} />
      </div>
    </div>
  );
}
