"use client";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { loadProducts } from "@lib/load-product";
import GeneralCard from "@components/GeneralCard";
import { MobileType, LaptopType, BicycleType } from "@lib/mobile-laptop";
import SideBarSelector from "@components/sideBars/SideBarSelector";

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
    <section className="w-full flex justify-center px-12">
      <div className="w-11/12 flex gap-3">
        <div className="">
          <SideBarSelector category={category} />
        </div>
        <div className="w-4/5 flex-grow">
          <div className=" grid grid-cols-4 gap-4 ">
            {data?.map((item) => {
              return <GeneralCard item={item} key={item._id} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
