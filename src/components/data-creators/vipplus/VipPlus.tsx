"use client";
import Image from "next/image";
import CarouselWrapper from "../carousel/Carousel";
import { useQuery } from "@tanstack/react-query";
import { loadVipplusProducts } from "@lib/load-vipplus";
import { LaptopType, MobileType } from "@lib/mobile-laptop";
import { Suspense } from "react";
import CarouselSkeleton from "@components/skeletons/CarouselSkeleton";

export default function VipPlus() {
  const { data, isLoading, error } = useQuery<Array<MobileType | LaptopType>>({
    queryKey: ["vipplusproducts"],
    queryFn: () => loadVipplusProducts(),
  });

  if (isLoading) {
    return (
      <div className="flex flex-col h-[242px]">
        <h1>loading</h1>
        <Image src="/vip/supervip.svg" width={40} height={40} alt="supervip" />
        <CarouselSkeleton />
      </div>
    );
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="w-11/12 flex flex-col gap-6 mt-8 items-center">
      <div className="w-full gap-3 flex justify-start px-5">
        <Image src="/vip/supervip.svg" width={40} height={40} alt="supervip" />
        <h1 className="text-xl font-bold">SUPER VIP</h1>
      </div>

      <CarouselWrapper data={data} />
    </div>
  );
}
