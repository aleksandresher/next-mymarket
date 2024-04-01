import React from "react";
import CategoryCreator from "@components/data-creators/CategoryCreator";
import ProductCreator from "@components/data-creators/ProductCreator";

export default function AdminPage() {
  return (
    <div>
      AdminPage
      <CategoryCreator />
      <ProductCreator />
    </div>
  );
}
