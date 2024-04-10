import CarouselWrapper from "../../data-creators/carousel/Carousel";
import { loadVipplusProducts } from "@lib/load-vipplus";

export default async function VipPlus() {
  const title = "VIP+";
  const image = "/vip/vipplus.svg";

  const data = await loadVipplusProducts();

  return (
    <section className="w-full flex justify-center px-12">
      <div className="w-11/12 flex flex-col gap-6 mt-8 items-center mb-9">
        <CarouselWrapper data={data || []} title={title} image={image} />
      </div>
    </section>
  );
}
