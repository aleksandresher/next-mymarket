"use server";

import Clerk from "../../../models/Clerk";
import { connectToDB } from "@utils/database";

export async function createUser(user: any) {
  try {
    await connectToDB();
    const newUser = await Clerk.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}
