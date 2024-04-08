"use client";
import Image from "next/image";
import CarouselWrapper from "../../data-creators/carousel/Carousel";
import { useQuery } from "@tanstack/react-query";
import { loadVipplusProducts } from "@lib/load-vipplus";
import { LaptopType, MobileType } from "@lib/mobile-laptop";
import { Suspense } from "react";
import CarouselSkeleton from "@components/skeletons/CarouselSkeleton";

export default function VipPlus() {
  const title = "VIP+";
  const image = "/vip/vipplus.svg";
  const { data, isLoading, error } = useQuery<Array<MobileType | LaptopType>>({
    queryKey: ["vipplusproducts"],
    queryFn: () => loadVipplusProducts(),
  });

  if (isLoading) {
    return (
      <section className="w-full flex justify-center px-12">
        <div className="w-11/12 flex flex-col gap-6 mt-8 items-center mb-9">
          <CarouselSkeleton image={image} title={title} />
        </div>
      </section>
    );
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <section className="w-full flex justify-center px-12">
      <div className="w-11/12 flex flex-col gap-6 mt-8 items-center mb-9">
        <CarouselWrapper data={data || []} title={title} image={image} />
      </div>
    </section>
  );
}