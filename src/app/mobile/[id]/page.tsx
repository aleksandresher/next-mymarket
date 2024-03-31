import { loadMobiles } from "@lib/load-mobiles";
import { MobileProductValues } from "@components/ProductCreator";
import { useQuery } from "@tanstack/react-query";
import SingleMobile from "@components/SingleMobile";

type MobileProps = {
  _id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  owner: string;
  place: string;
  vipplus: boolean | false;
  vip: boolean | false;
  supervip: boolean | false;
  brand: string;
  model: string;
  osversion: string;
  selfcamera: number;
  simnum: number;
  simtype: string;
  published: number;
  screensize: number;
  screentype: string;
  battery: number;
  cameranum: number;
  features: string;
  os: string;
  internalmemory: number;
  maincamera: number;
  condition: string;
};

export async function generateStaticParams() {
  const mobiles = await loadMobiles();
  console.log(mobiles);

  return mobiles.map((mobile: MobileProps) => ({
    params: {
      id: mobile._id.toString(),
    },
  }));
}

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <SingleMobile mobileId={params.id} />
    </div>
  );
}