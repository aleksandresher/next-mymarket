import React from "react";
import CategoryCreator from "@/components/CategoryCreator";
import ProductCreator from "@components/ProductCreator";

export default function AdminPage() {
  return (
    <div>
      AdminPage
      <CategoryCreator />
      <ProductCreator />
    </div>
  );
}
