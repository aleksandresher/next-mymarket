import NavBar from "../components/navigation/NavBar";
import CarouselWrapper from "@components/data-creators/carousel/Carousel";
import VipPlus from "@components/data-creators/vipplus/VipPlus";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar />
      <CarouselWrapper />
      <VipPlus />
      Home page
    </main>
  );
}

