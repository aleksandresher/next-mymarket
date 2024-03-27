import { connectToDB } from "@/utils/database";
import Category from "@models/Category";

export const POST = async (request) => {
  const { data } = await request.json();

  try {
    await connectToDB();

    let category = new Category({
      title: data.title,
    });

    await category.save();
    return new Response(JSON.stringify(category), { status: 201 });
  } catch (error) {
    return new Response("Failed to create category");
  }
};
