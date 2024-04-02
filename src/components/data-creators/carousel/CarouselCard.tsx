import Image from "next/image";

type CardProps = {
  image: string;
  title: string;
  price: number;
};

export default function CarouselCard({ data }: { data: CardProps }) {
  return (
    <div>
      {" "}
      <Image src={data?.image} width={30} height={30} alt={data?.title} />
      <h1>{data?.title}</h1>
      <p>{data?.price}</p>
    </div>
  );
}
