"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

export default function RightSlider() {
  const sliderRef = useRef<Slider>(null);
  const settings = {
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    vertical: true,
    cssEase: "linear",
    rtl: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings} ref={sliderRef}>
        <div className="mt-4">
          <Image
            src="/slider/right/livo-revers.png"
            width={300}
            height={300}
            className="w-[300px] h-[290px] rounded-[15px]"
            alt="livo"
          />
        </div>
        <div className="mt-4">
          <Image
            src="/slider/right/myauto-revers.png"
            width={300}
            height={300}
            className="w-[300px] h-[290px] rounded-[15px]"
            alt="myauto"
          />
        </div>
        <div className="mt-4">
          <Image
            src="/slider/right/myhome-revers.png"
            width={300}
            height={300}
            className="w-[300px] h-[290px] rounded-[15px]"
            alt="myhome"
          />
        </div>
        <div className="mt-4">
          <Image
            src="/slider/right/mymarket-revers.png"
            width={300}
            height={300}
            className="w-[300px] h-[290px] rounded-[15px]"
            alt="mymarket"
          />
        </div>
        <div className="mt-4">
          <Image
            src="/slider/right/myparts-revers.png"
            width={300}
            height={300}
            className="w-[300px] h-[290px] rounded-[15px]"
            alt="myparts"
          />
        </div>
        <div className="mt-4">
          <Image
            src="/slider/right/swoop-revers.png"
            width={300}
            height={300}
            className="w-[300px] h-[290px] rounded-[15px]"
            alt="swoop"
          />
        </div>
        <div className="mt-4">
          <Image
            src="/slider/right/vendoo-revers.png"
            width={300}
            height={300}
            className="w-[300px] h-[290px] rounded-[15px]"
            alt="vendoo"
          />
        </div>
      </Slider>
    </div>
  );
}
