"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { useState } from "react";

interface SlideContentProps {
  index: number;
  hoveredIndex: number | null;
}

export default function LeftSlider() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sliderRef = useRef<Slider>(null);
  const settings = {
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    vertical: true,
    cssEase: "linear",
    pauseOnHover: true,
  };

  const handleHover = (index: any) => {
    setHoveredIndex(index);
  };

  return (
    <div className="slider-container w-[300px]">
      <Slider {...settings} ref={sliderRef}>
        {Array.from({ length: 7 }, (_, index) => (
          <div
            key={index}
            className="mt-4"
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleHover(null)}
          >
            <SlideContent index={index} hoveredIndex={hoveredIndex} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

const SlideContent = ({
  index,
  hoveredIndex,
}: {
  index: number;
  hoveredIndex: number | null;
}) => {
  const content = [
    {
      normalImage: "/slider/left/livo.png",
      overlayImage: "/partners/livo.svg",
      alt: "livo",
      text: "ბინები, უძრავი ქონების ყიდვა-გაყიდვა",
    },
    {
      normalImage: "/slider/left/myauto.png",
      overlayImage: "/partners/myauto.svg",
      alt: "myauto",
      text: "ახალი და მეორადი ავტომობილები, მოტოტექნიკა",
    },
    {
      normalImage: "/slider/left/myhome.png",
      overlayImage: "/partners/myhome.svg",
      alt: "myhome",
      text: "უძრავი ქონების პორტალი საქართველოში",
    },
    {
      normalImage: "/slider/left/mymarket.png",
      overlayImage: "/partners/mymarket.svg",
      alt: "mymarket",
      text: "მეორადი და ახალი ნივთების ყიდვა-გაყიდვის პლატფორმა ",
    },
    {
      normalImage: "/slider/left/myparts.png",
      overlayImage: "/partners/myparts.svg",
      alt: "myparts",
      text: "ავტონაწილების ყიდვა-გაყიდვის პლატფორმა",
    },
    {
      normalImage: "/slider/left/swoop.png",
      overlayImage: "/partners/swoop.svg",
      alt: "swoop",
      text: "ფასდაკლების ვაუჩერები, კინოს ბილეთები და სხვა შეთავაზებები",
    },
    {
      normalImage: "/slider/left/vendoo.png",
      overlayImage: "/partners/vendoo.svg",
      alt: "vendoo",
      text: "ონლაინ სავაჭრო ცენტრი",
    },
  ];
  const isHovered = index === hoveredIndex;

  return (
    <div className="relative">
      <Image
        src={content[index].normalImage}
        width={300}
        height={300}
        className={`w-[300px] h-[290px] rounded-[15px] ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
        alt={content[index].alt}
      />

      {isHovered && (
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start text-center bg-white bg-opacity-80 shadow-md gap-4">
          <span className="flex justify-start px-3">
            <Image
              src={content[index].overlayImage}
              width={150}
              height={150}
              alt={content[index].alt}
              className="mb-2"
            />
          </span>
          <span className="flex justify-start px-3">
            <p className="text-start">{content[index].text}</p>
          </span>

          <span className="flex gap-4 px-3 cursor-pointer">
            <p>ნახვა</p>
            <Image
              src="/arrows/longright.svg"
              width={20}
              height={16}
              alt="see more"
            />
          </span>
        </div>
      )}
    </div>
  );
};
