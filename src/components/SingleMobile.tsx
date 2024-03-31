"use client";
import { useQuery } from "@tanstack/react-query";
import { loadMobile } from "@lib/load-mobile";
import SpecificationTable from "./SpecificationTable";

export default function SingleMobile({ mobileId }: { mobileId: string }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["mobile"],
    queryFn: () => loadMobile({ mobileId }),
  });
  return (
    <section className="w-full flex flex-col items-center">
      <p>{data?.title}</p>
      <p>{data?.description}</p>
      <SpecificationTable data={data} />
    </section>
  );
}
