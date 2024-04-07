"use client";
import Image from "next/image";
import CarouselWrapper from "../../data-creators/carousel/Carousel";
import { useQuery } from "@tanstack/react-query";
import { loadVipProducts } from "@lib/load-vip";
import { LaptopType, MobileType } from "@lib/mobile-laptop";
import { Suspense } from "react";
import CarouselSkeleton from "@components/skeletons/CarouselSkeleton";

export default function Vip() {
  const title = "VIP";
  const image = "/vip/vip.svg";
  const { data, isLoading, error } = useQuery<Array<MobileType | LaptopType>>({
    queryKey: ["vipproducts"],
    queryFn: () => loadVipProducts(),
  });

  if (isLoading) {
    return (
      <div className="flex flex-col h-[242px]">
        <h1>loading</h1>
        <Image src="/vip/vip.svg" width={40} height={40} alt="supervip" />
        <CarouselSkeleton />
      </div>
    );
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="w-11/12 flex flex-col gap-6 mt-8 items-center mb-9">
      <CarouselWrapper data={data || []} title={title} image={image} />
    </div>
  );
}
