import { connectToDB } from "@/utils/database";
import Bicycle from "../../../../../models/Bicycle";

export const POST = async (request) => {
  const { data } = await request.json();

  try {
    await connectToDB();

    let bicycle = new Bicycle({
      title: data.title,
      image: data.image,
      description: data.description,
      price: data.price,
      owner: data.owner,
      place: data.place,
      vipplus: data.vipplus,
      vip: data.vip,
      supervip: data.supervip,
      amortization: data.amortization,
      folding: data.folding,
      size: data.size,
      speedometr: data.speedometr,
      type: data.type,
      condition: data.condition,
    });
    console.log(bicycle);
    await bicycle.save();
    return new Response(JSON.stringify(bicycle), { status: 201 });
  } catch (error) {
    return new Response("Failed to create bicycle");
  }
};
