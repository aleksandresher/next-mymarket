import CarouselWrapper from "../../data-creators/carousel/Carousel";
import { loadVipplusProducts } from "@lib/load-vipplus";
import { Suspense } from "react";
import CarouselSkeleton from "@components/skeletons/CarouselSkeleton";

export default async function VipPlus() {
  const title = "VIP+";
  const image = "/vip/vipplus.svg";

  const data = await loadVipplusProducts();

  return (
    <section className="w-full flex justify-center px-12">
      <div className="w-11/12 flex flex-col gap-6 mt-8 items-center mb-9">
        <Suspense fallback={<CarouselSkeleton title={title} image={image} />}>
          <CarouselWrapper data={data || []} title={title} image={image} />
        </Suspense>
      </div>
    </section>
  );
}
