import CategorySlide from "@components/categories/CategorySlide";
import NavBar from "../components/navigation/NavBar";
import CarouselWrapper from "@components/data-creators/carousel/Carousel";
import VipPlus from "@components/data-creators/vipplus/VipPlus";
import Header from "@components/Header";
import HeaderBottom from "@components/header-bottom";
import HomeSearch from "@components/search/HomeSearch";

export default async function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-between pl-12 pr-12 pt-6">
      {/* <NavBar /> */}
      <Header />
      <HeaderBottom />
      <HomeSearch />
      <CategorySlide />
      <CarouselWrapper />
      <VipPlus />
      Home page
    </main>
  );
}

