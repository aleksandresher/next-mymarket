import { connectToDB } from "@utils/database";
import Mobile from "../../../../../models/Mobile";
import Bicycle from "../../../../../models/Bicycle";
import Laptop from "../../../../../models/Laptop";

export const GET = async (request, { params }, response) => {
  const { category } = params;
  try {
    await connectToDB();

    let items;
    switch (category) {
      case "mobile":
        items = await Mobile.find({});
        break;
      case "bicycle":
        items = await Bicycle.find({});
        break;
      case "laptop":
        items = await Laptop.find({});
        break;
      default:
        return new Response(JSON.stringify(items), { status: 400 });
    }

    return new Response(JSON.stringify(items), { status: 200 });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: "Failed to fetch items" });
  }
};

// try {
//     await connectToDB();

//     const exsMobile = await Mobile.findById(mobileId);

//     return new Response(JSON.stringify(exsMobile), { status: 201 });
//   } catch (error) {
//     console.error(error);
//     return response.status(500).json({ error: "Failed to fetch mobile" });
//   }
// };
