import { Schema, model, models } from "mongoose";

interface ICUser {
  username: string;
  lastname: string;
  email: string;
  password: string;
  gender: string;
  date: number;
  phone: number;
  role: string;
}

const customuserSchema = new Schema<ICUser>({
  username: { type: String, required: true },
  lastname: { type: String, required: true },
  password: { type: String, required: true },
  gender: { type: String, required: true },
  date: { type: Number, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true },
});

const CustomUser = models.CustomUser || model("CustomUser", customuserSchema);

export default CustomUser;
