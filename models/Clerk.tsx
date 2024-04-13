import { Schema, model, models } from "mongoose";

interface ICUser {
  clerkId: string;
  username: string;
  lastname: string;
  email: string;
  //   password: string;
}

const clerkuser = new Schema<ICUser>({
  username: { type: String, required: true },
  lastname: { type: String, required: true },
  //   password: { type: String, required: true },
  clerkId: { type: String, required: true },
  email: { type: String, required: true },
});

const Clerk = models.Clerk || model("Clerk", clerkuser);

export default Clerk;
