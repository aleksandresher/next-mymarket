import { connectToDB } from "@utils/database";
import Mobile from "../../../../../models/Mobile";

export const GET = async (response) => {
  try {
    await connectToDB();

    const exsMobiles = await Mobile.find({});

    return new Response(JSON.stringify(exsMobiles), { status: 201 });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: "Failed to fetch mobiles" });
  }
};
