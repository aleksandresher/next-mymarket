import { Schema, model, models } from "mongoose";

interface IUser {
  username: string;
  email: string;
  role: string;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true },
});

const User = models.User || model("User", userSchema);

export default User;
