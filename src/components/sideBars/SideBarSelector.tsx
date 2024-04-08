import BicycleSideBar from "./BicycleSideBar";
import MobileSideBar from "./MobileSideBar";

export default function SideBarSelector({ category }: { category: string }) {
  switch (category) {
    case "mobile":
      return <MobileSideBar />;
    case "bicycle":
      return <BicycleSideBar />;
    default:
      return null;
  }
}
