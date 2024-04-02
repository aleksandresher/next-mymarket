import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselCard from "./CarouselCard";
import { VipPlusData } from "../vipplus/VipPlus";

export default function CarouselWrapper({ data }: { data?: VipPlusData }) {
  console.log(data);
  return (
    <Carousel>
      <CarouselPrevious />
      <CarouselNext />
      <CarouselContent>
        <CarouselItem>..sdsd.</CarouselItem>
        <CarouselItem>.sdsd..</CarouselItem>
        <CarouselItem>..sds.</CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
