"use client";

import { MobileType, LaptopType } from "@lib/mobile-laptop";

import Image from "next/image";

type Props = {
  data?: Array<MobileType | LaptopType>;
};

export default function RecentlyCreated({ data }: Props) {
  console.log(data);
  return (
    <section className="w-11/12 flex flex-col gap-6 mt-7 p-5">
      <h1 className="text-xl font-bold">ახალი დამატებულები</h1>
      <div className="grid grid-col-1 md:grid-cols-6 gap-1  gap-y-4 ">
        {data?.map((item) => {
          return (
            <div className="flex md:flex-col gap-1" key={item?._id}>
              <Image
                src={item?.image}
                width={400}
                height={527}
                alt={item?.title}
                className=" max-w-20 max-h-20 md:max-w-48 md:max-h-40 rounded-[15px]"
              />
              <h1 className="overflow-hidden h-[50px] w-[200px] px-2 font-medium mt-2">
                {item?.title}
              </h1>
              <div className="flex mt-5 px-2 items-center">
                <h2 className="text font-bold">{item?.price}.00 ₾</h2>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
