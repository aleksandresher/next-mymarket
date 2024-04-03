"use client";

import { useQuery } from "@tanstack/react-query";
import { loadMobiles } from "@lib/load-mobiles";
import MobileSmallCard from "./MobileSmallCard";
import { MobileProps } from "./MobileSmallCard";
import SideBar from "../side-accordion/SideBar";

export default function AllMobile() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["mobiles"],
    queryFn: () => loadMobiles(),
  });
  return (
    <div className="flex">
      <div className="grid grid-cols-4 gap-4 w-[1000px]">
        {data?.map((item: MobileProps) => {
          return <MobileSmallCard item={item} key={item.title} />;
        })}
      </div>
    </div>
  );
}
