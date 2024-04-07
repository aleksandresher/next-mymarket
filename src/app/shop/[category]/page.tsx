"use client";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { loadProducts } from "@lib/load-product";
import SingleProduct from "@components/SingleProduct";

export default function GenericCategory() {
  const params = useParams();
  console.log(params);
  const category = typeof params.category === "string" ? params.category : "";
  const { data, isLoading, error } = useQuery({
    queryKey: ["generic"],
    queryFn: () => loadProducts({ category }),
  });

  return (
    <div>
      <SingleProduct data={data} />
    </div>
  );
}
