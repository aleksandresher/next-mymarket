import { connectToDB } from "@utils/database";
import Mobile from "../../../../../../models/Mobile";

export const GET = async (request, { params }, response) => {
  const { mobileId } = params;

  try {
    await connectToDB();

    const exsMobile = await Mobile.findById(mobileId);

    return new Response(JSON.stringify(exsMobile), { status: 201 });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: "Failed to fetch mobile" });
  }
};
