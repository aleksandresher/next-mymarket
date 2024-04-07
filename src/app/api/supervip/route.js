import Mobile from "../../../../models/Mobile";
import Bicycle from "../../../../models/Bicycle";

import { connectToDB } from "@/utils/database";

export const GET = async (response) => {
  try {
    await connectToDB();

    const exsMobiles = await Mobile.find({ supervip: true });
    const exsBicycles = await Bicycle.find({ supervip: true });

    const responseData = [...exsMobiles, ...exsBicycles];

    return new Response(JSON.stringify(responseData), { status: 200 });
  } catch (error) {
    console.error(error);
    return response
      .status(500)
      .json({ error: "Failed to fetch super vip products" });
  }
};
