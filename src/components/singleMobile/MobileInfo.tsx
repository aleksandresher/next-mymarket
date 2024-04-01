import { MobileProps } from "@components/mobileList/MobileSmallCard";
import Image from "next/image";
import { Suspense } from "react";

export default function MobileInfo({ data }: { data: MobileProps }) {
  const createdAt = data?.createdAt ? new Date(data.createdAt) : null;
  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  const id = data?._id.slice(0, 5);
  return (
    <div className="">
      <span className="flex gap-8">
        <p>ID {id}</p>
        <span className="flex gap-3">
          <Image src="/clock.svg" width={15} height={15} alt="clock" />
          {createdAt && <p>{formatDate(createdAt)}</p>}
        </span>
      </span>
      <h1 className="text-xl font-bold">{data?.title}</h1>
      <p>{data?.owner}</p>
      <p>{data?.place}</p>
      <p>{data?.description}</p>
    </div>
  );
}
