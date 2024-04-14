import Clerk from "../../../../../models/Clerk";
import { connectToDB } from "../../../../utils/database";

export const POST = async (request) => {
  const { username, lastname, email, password } = await request.json();

  try {
    await connectToDB();

    let clerk = new Clerk({
      username: username,
      lastname: lastname,
      email: email,
      password: password,
    });
    console.log(clerk);
    await clerk.save();
    return new Response(JSON.stringify(clerk), { status: 201 });
  } catch (error) {
    return new Response("Failed to createuser");
  }
};
