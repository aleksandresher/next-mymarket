"use client";
import { useQuery } from "@tanstack/react-query";
import { loadMobile } from "@lib/load-mobile";

export default function SingleMobile({ mobileId }: { mobileId: string }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["mobile"],
    queryFn: () => loadMobile({ mobileId }),
  });
  return (
    <section>
      <p>{data?.title}</p>
      <p>{data?.description}</p>
    </section>
  );
}
