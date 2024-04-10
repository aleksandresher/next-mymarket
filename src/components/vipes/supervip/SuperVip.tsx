import CarouselWrapper from "../../data-creators/carousel/Carousel";
import { loadSuperVipProducts } from "@lib/load-supervip";
import { Suspense } from "react";
import CarouselSkeleton from "@components/skeletons/CarouselSkeleton";

export default async function SuperVip() {
  const title = "SUPER VIP";
  const image = "/vip/supervip.svg";

  const data = await loadSuperVipProducts();

  return (
    <section className="w-full flex justify-center px-12">
      <div className="w-11/12 flex flex-col gap-6 mt-8 items-center mb-9">
        <Suspense
          fallback={<CarouselSkeleton image={image} title={title} />}
        ></Suspense>
        <CarouselWrapper data={data || []} title={title} image={image} />
      </div>
    </section>
  );
}
