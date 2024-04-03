import AllMobile from "@components/mobileList/AllMobiles";
import SideBar from "@components/side-accordion/SideBar";
import Header from "@components/Header";

export default function Mobiles() {
  return (
    <div className="w-full min-h-screen flex gap-5 justify-center p-10 bg-[#f1f3f6]">
      <SideBar />
      <AllMobile />;
    </div>
  );
}
