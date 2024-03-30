import { connectToDB } from "@/utils/database";
import Mobile from "../../../../models/Mobile";

export const POST = async (request) => {
  const { data } = await request.json();

  try {
    await connectToDB();

    let mobile = new Mobile({
      vipplus: data.vipplus,
      vip: data.vip,
      supervip: data.supervip,
      brand: data.brand,
      model: data.model,
      osversion: data.osversion,
      selfcamera: data.selfcamera,
      simnum: data.simnum,
      simtype: data.simtype,
      published: data.published,
      screensize: data.screensize,
      screentype: data.screentype,
      battery: data.battery,
      cameranum: data.cameranum,
      features: data.features,
      os: data.os,
      internalmemory: data.internalmemory,
      maincamera: data.maincamera,
      place: data.place,
      owner: data.owner,
      title: data.title,
      description: data.description,
      image: data.image,
      price: data.price,
      condition: data.condition,
    });
    console.log(mobile);
    await mobile.save();
    return new Response(JSON.stringify(mobile), { status: 201 });
  } catch (error) {
    return new Response("Failed to create mobile");
  }
};
