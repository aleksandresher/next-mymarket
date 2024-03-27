import { Schema, model, models } from "mongoose";

type SubCategory = {
  title: String;
};
// interface ICategory {
//   title: String;
//   image: String;
//   subcategories: SubCategory[];
// }

const categorySchema = new Schema<SubCategory>({
  title: { type: String, required: true },
  //   image: { type: String, required: true },
  //   subcategories: [
  //     {
  //       title: { type: String, required: true },
  //     },
  //   ],
});

const Category = models.Category || model("Category", categorySchema);

export default Category;
