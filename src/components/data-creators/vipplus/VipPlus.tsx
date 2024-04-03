"use client";

import CarouselWrapper from "../carousel/Carousel";
import { useQuery } from "@tanstack/react-query";
import { loadVipplusProducts } from "@lib/load-vipplus";
import { MobileProps } from "@components/mobileList/MobileSmallCard";
import { LaptopTypes } from "@lib/laptop";

export default function VipPlus() {
  const { data, isLoading, error } = useQuery<Array<MobileProps | LaptopTypes>>(
    {
      queryKey: ["vipplusproducts"],
      queryFn: () => loadVipplusProducts(),
    }
  );
  console.log(data);
  return <CarouselWrapper data={data} />;
}
