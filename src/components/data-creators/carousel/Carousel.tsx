import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

import { MobileProps } from "@components/mobileList/MobileSmallCard";
import { LaptopTypes } from "@lib/laptop";

interface CarouselWrapperProps {
  data?: Array<MobileProps | LaptopTypes>;
}

export default function CarouselWrapper({ data }: CarouselWrapperProps) {
  return (
    <div className="w-4/5 flex overflow-x-hidden gap-5 p-6">
      {data?.map((item) => {
        return (
          <div className="flex flex-col w-[200px] ">
            <Image
              src={item?.image}
              width={200}
              height={200}
              alt={item?.title}
            />
            <h1>{item?.title}</h1>
            <p>{item?.price}</p>
          </div>
        );
      })}
    </div>
  );
}
