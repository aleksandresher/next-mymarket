"use client";
import Image from "next/image";
import Link from "next/link";

import { MobileProps } from "@components/mobileList/MobileSmallCard";
import { LaptopTypes } from "@lib/laptop";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface CarouselWrapperProps {
  data?: Array<MobileProps | LaptopTypes>;
}

export default function CarouselWrapper({ data }: CarouselWrapperProps) {
  const settings = {
    className: "flex flex-col gap-3",
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div className="w-11/12 container p-5">
      <Slider {...settings}>
        {data?.map((item) => {
          return (
            <Link href={`/mobile/${item._id}`}>
              {" "}
              <div className="" key={item?._id}>
                <Image
                  src={item?.image}
                  width={150}
                  height={150}
                  alt={item?.title}
                  className="rounded-[15px]"
                />
                <h1 className="overflow-hidden h-[20px]">{item?.title}</h1>
                <div className="flex">
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
