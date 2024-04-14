import CategorySlide from "@components/categories/CategorySlide";

import CarouselWrapper from "@components/data-creators/carousel/Carousel";
import VipPlus from "@components/vipes/vipplus/VipPlus";
import Header from "@components/Header";
import HeaderBottom from "@components/header-bottom";
import HomeSearch from "@components/search/HomeSearch";
import Vip from "@components/vipes/vip/Vip";
import SuperVip from "@components/vipes/supervip/SuperVip";
import RecentlyCreatedWrapper from "@components/recentlyCreated/RecentlyCreatedWrapper";
import Footer from "@components/Footer";
import Partners from "@components/Partners";
import { Suspense } from "react";
import SearchBarFallback from "@components/search/SearchBarFallback";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId }: { userId: string | null } = auth();
  if (userId) {
    redirect("/dashboard");
  }
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-between pt-6 gap-5">
      {/* <NavBar /> */}
      <Header />
      <HeaderBottom />
      {/* <Suspense fallback={<SearchBarFallback />}>
        <HomeSearch />
      </Suspense>

      <CategorySlide />
      <SuperVip />
      <VipPlus />
      <Vip />
      <RecentlyCreatedWrapper /> */}
      <Footer />
      <Partners />
    </main>
  );
}

