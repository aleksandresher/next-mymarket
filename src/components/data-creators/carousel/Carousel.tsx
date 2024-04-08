"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { LaptopType, MobileType } from "@lib/mobile-laptop";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselWrapperProps {
  data?: Array<MobileType | LaptopType>;
  title: string;
  image: string;
}

export default function CarouselWrapper({
  data,
  title,
  image,
}: CarouselWrapperProps) {
  const sliderRef = useRef<Slider>(null);
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  const settings = {
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    infinity: false,
    swipeToSlide: true,
  };

  return (
    <div className="w-full container px-5 gap-5 slider-container flex flex-col">
      <div className="flex justify-between items-center pr-4 ">
        <span className="flex  items-center gap-3">
          <Image src={image} alt="title" width={40} height={40} />
          <h1 className="text-xl font-bold">{title}</h1>
        </span>
        <div className="flex gap-2 items-center">
          <h1 className="font-tbc-medium">ყველას ნახვა</h1>
          <span className="flex gap-2">
            <button
              className="button border rounded-[50%] p-1 border-[#7b7e7e]"
              onClick={previous}
            >
              <Image
                src="/arrows/left2.png"
                width={24}
                height={24}
                alt="next"
              />
            </button>
            <button
              className="button border rounded-[50%] p-1 border-[#7b7e7e]"
              onClick={next}
            >
              <Image
                src="/arrows/right2.png"
                width={24}
                height={24}
                alt="previous"
              />
            </button>
          </span>
        </div>
      </div>

      <Slider {...settings} ref={sliderRef}>
        {data?.map((item) => {
          return (
            <Link href={`/shop/${item.category}/${item._id}`} key={item?._id}>
              <div className="flex flex-col gap-1" key={item?._id}>
                <Image
                  src={item?.image}
                  width={400}
                  height={527}
                  alt={item?.title}
                  className=" max-w-48 max-h-40 rounded-[10px]"
                />
                <h1 className="overflow-hidden h-[50px] w-[200px] px-2">
                  {item?.title}
                </h1>
                <div className="flex mt-5 px-2 items-center">
                  <h2 className="text font-bold">{item?.price}.00 ₾</h2>
                </div>
              </div>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
}
