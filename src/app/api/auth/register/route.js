import { connectToDB } from "@/utils/database";
import CustomUser from "../../../../../models/CUser";

export const POST = async (request) => {
  const {
    username,
    lastname,
    email,
    password,
    gender,
    phonenumber,
    confidentiality,
  } = await request.json();

  try {
    await connectToDB();

    let user = new CustomUser({
      username: username,
      lastname: lastname,
      email: email,
      password: password,
      gender: gender,
      phone: phonenumber,
      confidentiality: confidentiality,
    });
    console.log(user);
    await user.save();
    return new Response(JSON.stringify(user), { status: 201 });
  } catch (error) {
    return new Response("Failed to createuser");
  }
};
