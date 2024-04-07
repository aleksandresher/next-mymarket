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

  console.log(data);
  return (
    <section className="w-11/12 flex flex-col gap-4 mt-7 ">
      <h1 className="text-xl font-bold">ახალი დამატებულები</h1>
      <div className="grid grid-cols-5 gap-4">
        {data?.map((item) => {
          return (
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
              <div className="flex mt-5 px-2 items-center gap-1">
                <h2 className="text font-bold ">{item?.price}.00</h2>
                <Image
                  src="/gel.png"
                  width={15}
                  height={10}
                  alt="gelIcon"
                  className="h-[15px]"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
