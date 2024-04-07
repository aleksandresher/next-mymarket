import { Skeleton } from "@/components/ui/skeleton";

export default function CarouselSkeleton() {
  return (
    <div className="flex gap-5 space-y-3 h-[60px]">
      <Skeleton className="h-[190px] w-[150px] rounded-xl bg-[#f1f3f6]" />
      <Skeleton className="h-[190px] w-[150px] rounded-xl bg-[#f1f3f6]" />
      <Skeleton className="h-[190px] w-[150px] rounded-xl bg-[#f1f3f6]" />
      <Skeleton className="h-[190px] w-[150px] rounded-xl bg-[#f1f3f6]" />
      <Skeleton className="h-[190px] w-[150px] rounded-xl bg-[#f1f3f6]" />
      <Skeleton className="h-[190px] w-[150px] rounded-xl bg-[#f1f3f6]" />
    </div>
  );
}
