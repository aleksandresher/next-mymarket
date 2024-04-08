import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

export default function CarouselSkeleton({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  return (
    <div className="w-full container px-5 gap-5 slider-container flex flex-col">
      <div className="flex justify-between items-center ">
        <span className="flex  items-center gap-3">
          <Image src={image} alt="title" width={40} height={40} />
          <h1 className="text-xl font-bold">{title}</h1>
        </span>
        <div className="flex gap-2 items-center">
          <h1>ყველას ნახვა</h1>
          <span className="flex gap-2">
            <button className="button border rounded-[50%] p-1 border-[#7b7e7e]">
              <Image
                src="/arrows/left2.png"
                width={24}
                height={24}
                alt="next"
              />
            </button>
            <button className="button border rounded-[50%] p-1 border-[#7b7e7e]">
              <Image
                src="/arrows/right2.png"
                width={24}
                height={24}
                alt="previous"
              />
            </button>
          </span>
        </div>
      </div>
      <div className="flex justify-between">
        {" "}
        <Skeleton className="h-[190px] w-[200px] rounded-xl bg-[#f1f3f6]" />
        <Skeleton className="h-[190px] w-[200px] rounded-xl bg-[#f1f3f6]" />
        <Skeleton className="h-[190px] w-[200px] rounded-xl bg-[#f1f3f6]" />
        <Skeleton className="h-[190px] w-[200px] rounded-xl bg-[#f1f3f6]" />
        <Skeleton className="h-[190px] w-[200px] rounded-xl bg-[#f1f3f6]" />
        <Skeleton className="h-[190px] w-[200px] rounded-xl bg-[#f1f3f6]" />
      </div>
    </div>
  );
}
