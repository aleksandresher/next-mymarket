"use client";
import { useQuery } from "@tanstack/react-query";
import { MobileType, LaptopType } from "@lib/mobile-laptop";
import { loadRecentlyAdded } from "@lib/recently-added";
import Image from "next/image";

export default function RecentlyCreated() {
  const { data, isLoading, error } = useQuery<Array<MobileType | LaptopType>>({
    queryKey: ["recentlyCreated"],
    queryFn: () => loadRecentlyAdded(),
  });

  return (
    <section className="w-full flex justify-center bg-[#f7f8fa] px-12">
      <div className="w-11/12 flex flex-col gap-6 mt-7 p-5">
        <h1 className="text-xl font-bold">ახალი დამატებულები</h1>
        <div className="grid grid-cols-6 gap-1  gap-y-4 ">
          {data?.map((item) => {
            return (
              <div className="flex flex-col gap-1" key={item?._id}>
                <Image
                  src={item?.image}
                  width={400}
                  height={527}
                  alt={item?.title}
                  className=" max-w-48 max-h-40 rounded-[15px]"
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
      </div>
    </section>
  );
}