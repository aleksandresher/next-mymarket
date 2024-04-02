import React from "react";
import CategoryCreator from "@components/data-creators/categories/CategoryCreator";
import MobileCreator from "@components/data-creators/mobiles/MobileCreator";
import LaptopCreator from "@components/data-creators/laptops/LaptopCreator";
import BicycleCreator from "@components/data-creators/bicycle/BicycleCreator";

export default function AdminPage() {
  return (
    <div>
      AdminPage
      <CategoryCreator />
      <MobileCreator />
      <LaptopCreator />
      <BicycleCreator />
    </div>
  );
}
