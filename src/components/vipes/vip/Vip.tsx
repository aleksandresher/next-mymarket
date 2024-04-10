import CarouselWrapper from "../../data-creators/carousel/Carousel";
import { loadVipProducts } from "@lib/load-vip";

export default async function Vip() {
  const title = "VIP";
  const image = "/vip/vip.svg";

  const data = await loadVipProducts();

  return (
    <section className="w-full flex justify-center px-12">
      <div className="w-11/12 flex flex-col gap-6 mt-8 items-center mb-9">
        <CarouselWrapper data={data || []} title={title} image={image} />
      </div>
    </section>
  );
}
