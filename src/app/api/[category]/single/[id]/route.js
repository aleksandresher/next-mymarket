import { connectToDB } from "@utils/database";
import Laptop from "../../../../../../models/Laptop";
import Mobile from "../../../../../../models/Mobile";
import Bicycle from "../../../../../../models/Bicycle";

export const GET = async (request, { params }, response) => {
  const { category, id } = params;
  try {
    await connectToDB();

    let item;
    switch (category) {
      case "mobile":
        item = await Mobile.findById(id);
        break;
      case "bicycle":
        item = await Bicycle.findById(id);
        break;
      case "laptop":
        item = await Laptop.findById(id);
        break;
      default:
        return new Response(JSON.stringify(item), { status: 400 });
    }
    console.log(`item from single item: ${item}`);

    return new Response(JSON.stringify(item), { status: 200 });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: "Failed to fetch items" });
  }
};
