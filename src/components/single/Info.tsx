import Image from "next/image";

import { MobileType, LaptopType } from "@lib/mobile-laptop";

type Props = {
  data: MobileType | LaptopType;
};

export default function Info({ data }: Props) {
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
    <div className="flex flex-col gap-2">
      <span className="flex gap-8">
        <p>ID {id}</p>
        <span className="flex gap-3">
          <Image src="/clock.svg" width={15} height={15} alt="clock" />
          {createdAt && <p>{formatDate(createdAt)}</p>}
        </span>
      </span>
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-bold border-b-[1px] border-[#9599a0] pb-2">
          {data?.title}
        </h1>
        <p>{data?.owner}</p>
        <p className="text-sm font-medium">{data?.place}</p>
      </div>

      <div className="border-t-[1px] mt-2 border-[#9599a0]">
        <p>{data?.description}</p>
      </div>
    </div>
  );
}
