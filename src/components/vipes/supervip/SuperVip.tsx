"use client";
import Image from "next/image";
import CarouselWrapper from "../../data-creators/carousel/Carousel";
import { useQuery } from "@tanstack/react-query";
import { loadSuperVipProducts } from "@lib/load-supervip";
import { LaptopType, MobileType } from "@lib/mobile-laptop";
import { Suspense } from "react";
import CarouselSkeleton from "@components/skeletons/CarouselSkeleton";

export default function SuperVip() {
  const title = "SUPER VIP";
  const image = "/vip/supervip.svg";
  const { data, isLoading, error } = useQuery<Array<MobileType | LaptopType>>({
    queryKey: ["supervipproducts"],
    queryFn: () => loadSuperVipProducts(),
  });

  if (isLoading) {
    return (
      <div className="w-11/12 flex flex-col gap-6 mt-8 items-center mb-9">
        <CarouselSkeleton image={image} title={title} />
      </div>
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
