"use client";
import { useQuery } from "@tanstack/react-query";
import { loadSingle } from "@lib/load-single";
import SpecificationTable from "./single/SpecificationTable";
import ImageCardSingle from "./single/ImageCard";
import Info from "./single/Info";
import BuyCard from "./single/BuyCard";

export default function SingleProduct({
  id,
  category,
}: {
  id: string;
  category: string;
}) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["single"],
    queryFn: () => loadSingle({ category, id }),
  });

  return (
    <section className="w-full flex flex-col items-center p-4 mt-8 ">
      <section className="w-11/12 flex justify-between mb-8 gap-4 bg-[#fff] p-8">
        <ImageCardSingle data={data} />
        <Info data={data} />
        <BuyCard price={data?.price} />
      </section>

      <SpecificationTable data={data} />
    </section>
  );
}
