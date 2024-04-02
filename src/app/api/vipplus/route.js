import Mobile from "../../../../models/Mobile";
import Bicycle from "../../../../models/Bicycle";

import { connectToDB } from "@/utils/database";

export const GET = async (response) => {
  try {
    await connectToDB();

    const exsMobiles = await Mobile.find({ vipplus: true });
    const exsBicycles = await Bicycle.find({ vipplus: true });

    const responseData = {
      mobiles: exsMobiles,
      bicycles: exsBicycles,
    };

    return new Response(JSON.stringify(responseData), { status: 201 });
  } catch (error) {
    console.error(error);
    return response
      .status(500)
      .json({ error: "Failed to fetch vipplus products" });
  }
};
