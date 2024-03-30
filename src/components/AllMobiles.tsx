"use client";

import { useQuery } from "@tanstack/react-query";
import { loadMobiles } from "@lib/load-mobiles";

export default function AllMobile() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["mobiles"],
    queryFn: () => loadMobiles(),
  });
  return <div>{JSON.stringify(data)}</div>;
}
