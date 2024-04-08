"use client";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { loadProducts } from "@lib/load-product";
import GeneralCard from "@components/GeneralCard";
import { MobileType, LaptopType, BicycleType } from "@lib/mobile-laptop";

export default function GenericCategory() {
  const params = useParams();

  const category = typeof params.category === "string" ? params.category : "";

  type DataType = typeof category extends "mobile"
    ? MobileType
    : typeof category extends "bicycle"
    ? LaptopType
    : typeof category extends "bicycle"
    ? BicycleType
    : any[];
  const { data, isLoading, error } = useQuery<DataType>({
    queryKey: ["generic"],
    queryFn: () => loadProducts({ category }),
  });

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-4 gap-4 w-[1000px]">
        {data?.map((item) => {
          return <GeneralCard item={item} key={item._id} />;
        })}
      </div>
    </div>
  );
}
