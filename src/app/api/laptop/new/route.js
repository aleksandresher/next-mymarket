import { connectToDB } from "@/utils/database";
import Laptop from "../../../../../models/Laptop";

export const POST = async (request) => {
  const { data } = await request.json();

  try {
    await connectToDB();

    let laptop = new Laptop({
      title: data.title,
      image: data.image,
      description: data.description,
      price: data.price,
      owner: data.owner,
      place: data.place,
      vipplus: data.vipplus,
      vip: data.vip,
      supervip: data.supervip,
      brand: data.brand,
      hdd: data.hdd,
      ssd: data.ssd,
      published: data.published,
      videocard: data.videocard,
      ram: data.ram,
      os: data.os,
      cpufrequence: data.cpufrequence,
      cpu: data.cpu,
      condition: data.condition,
      resolution: data.resolution,
    });
    console.log(laptop);
    await laptop.save();
    return new Response(JSON.stringify(laptop), { status: 201 });
  } catch (error) {
    return new Response("Failed to create laptop");
  }
};
