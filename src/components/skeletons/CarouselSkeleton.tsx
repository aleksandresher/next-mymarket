import { Skeleton } from "@/components/ui/skeleton";

export default function CarouselSkeleton() {
  return (
    <div className="flex justify-between">
      <Skeleton className="h-[190px] w-[200px] rounded-xl bg-[#f1f3f6]" />
      <Skeleton className="h-[190px] w-[200px] rounded-xl bg-[#f1f3f6]" />
      <Skeleton className="h-[190px] w-[200px] rounded-xl bg-[#f1f3f6]" />
      <Skeleton className="h-[190px] w-[200px] rounded-xl bg-[#f1f3f6]" />
      <Skeleton className="h-[190px] w-[200px] rounded-xl bg-[#f1f3f6]" />
      <Skeleton className="h-[190px] w-[200px] rounded-xl bg-[#f1f3f6]" />
    </div>
  );
}
