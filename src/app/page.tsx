import CategorySlide from "@components/categories/CategorySlide";
import NavBar from "../components/navigation/NavBar";
import CarouselWrapper from "@components/data-creators/carousel/Carousel";
import VipPlus from "@components/vipes/vipplus/VipPlus";
import Header from "@components/Header";
import HeaderBottom from "@components/header-bottom";
import HomeSearch from "@components/search/HomeSearch";
import Vip from "@components/vipes/vip/Vip";
import SuperVip from "@components/vipes/supervip/SuperVip";
import RecentlyCreated from "@components/recentlyCreated/RecentlyCreated";

export default async function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-between pl-12 pr-12 pt-6">
      {/* <NavBar /> */}
      <Header />
      <HeaderBottom />
      <HomeSearch />
      <CategorySlide />
      <SuperVip />
      <VipPlus />
      <Vip />
      <RecentlyCreated />
    </main>
  );
}

