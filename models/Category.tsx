import { Schema, model, models } from "mongoose";

type SubCategory = {
  name: string;
};
interface ICategory {
  title: string;
  image: string;
  subcategories: SubCategory[];
}

const categorySchema = new Schema<ICategory>({
  title: { type: String, required: true },
  image: { type: String, required: true },
  subcategories: [
    {
      name: { type: String, required: true },
    },
  ],
});

const Category = models.Category || model("Category", categorySchema);

export default Category;
