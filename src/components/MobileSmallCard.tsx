import Image from "next/image";
import { MobileProductValues } from "./ProductCreator";
import { CldImage } from "next-cloudinary";

export default function MobileSmallCard({
  item,
}: {
  item: MobileProductValues;
}) {
  return (
    <div className="bg-white">
      <CldImage src={item.image} alt={item.title} width={200} height={400} />
      <h1>{item.title}</h1>
      <p>{item.price}</p>
    </div>
  );
}
