import SingleProduct from "@components/SingleProduct";
import { loadSingle } from "@lib/load-single";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string; category: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const category = params.category;

  const product = await loadSingle({ category, id });

  return {
    title: product.title,
  };
}

export default function Page({ params }: Props) {
  return (
    <div className="w-11/12 bg-[#f1f3f6] flex flex-col items-center">
      <SingleProduct id={params.id} category={params.category} />
    </div>
  );
}
