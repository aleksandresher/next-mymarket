import { connectToDB } from "@utils/database";
import Category from "../../../../../models/Category";

export const GET = async (response) => {
  try {
    await connectToDB();

    const exsCategories = await Category.find({});

    return new Response(JSON.stringify(exsCategories), { status: 201 });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: "Failed to fetch categories" });
  }
};
