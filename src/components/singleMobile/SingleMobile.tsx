"use client";
import { useQuery } from "@tanstack/react-query";
import { loadMobile } from "@lib/load-mobile";
import SpecificationTable from "./SpecificationTable";
import BuyCard from "./BuyCard";
import ImageCard from "./ImageCard";
import MobileInfo from "./MobileInfo";

export default function SingleMobile({ mobileId }: { mobileId: string }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["mobile"],
    queryFn: () => loadMobile({ mobileId }),
  });
  return (
    <section className="w-full flex flex-col items-center p-4 mt-8 ">
      <section className="flex mb-8 w-4/5">
        <ImageCard data={data} />
        <MobileInfo data={data} />
        <BuyCard price={data?.price} />
      </section>

      <SpecificationTable data={data} />
    </section>
  );
}
