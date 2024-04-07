"use client";
import SingleProduct from "@components/SingleProduct";
import { useParams } from "next/navigation";
export default function Page() {
  const params = useParams<{ id: string; category: string }>();

  return (
    <div className="w-11/12 bg-[#f1f3f6] flex flex-col items-center">
      <SingleProduct id={params.id} category={params.category} />
    </div>
  );
}
