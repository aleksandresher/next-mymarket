"use client";
import Image from "next/image";
import Link from "next/link";
import { LaptopType, MobileType } from "@lib/mobile-laptop";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselWrapperProps {
  data?: Array<MobileType | LaptopType>;
}

export default function CarouselWrapper({ data }: CarouselWrapperProps) {
  const settings = {
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
  };

  console.log(`data from carousel ${data}`);
  return (
    <div className="w-full container px-5 gap-5">
      <Slider {...settings}>
        {data?.map((item) => {
          return (
            <Link href={`/mobile/${item._id}`} key={item?._id}>
              <div className="flex flex-col gap-1">
                <Image
                  src={item?.image}
                  width={190}
                  height={160}
                  alt={item?.title}
                  className=" max-w-48 max-h-40"
                />
                <h1 className="overflow-hidden h-[20px]">{item?.title}</h1>
                <div className="flex mt-5">
                  <h2 className="text font-bold ">{item?.price}.00</h2>
                  <Image src="/gel.png" width={20} height={18} alt="gelIcon" />
                </div>
              </div>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
}
