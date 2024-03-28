import { Schema, model, models } from "mongoose";

interface IMobile {
  title: string;
  image: string;
  place: string;
  owner: string;
  description: string;
  price: number;
  vipplus: boolean;
  vip: boolean;
  supervip: boolean;
  brand: string;
  model: string;
  osversion: string;
  selfcamera: string;
  simnum: string;
  simtype: string;
  published: Date;
  screensize: string;
  screentype: string;
  battery: string;
  cameranum: string;
  features: string;
  os: string;
  internalmemory: number;
  maincamera: string;
}

const mobileschema = new Schema<IMobile>({
  title: { type: String, required: true },
  image: { type: String, required: true },
  place: { type: String, required: true },
  owner: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  vipplus: { type: Boolean, required: true },
  vip: { type: Boolean, required: true },
  supervip: { type: Boolean, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  osversion: { type: String, required: true },
  selfcamera: { type: String, required: true },
  simnum: { type: String, required: true },
  simtype: { type: String, required: true },
  published: { type: Date, required: true },
  screensize: { type: String, required: true },
  screentype: { type: String, required: true },
  battery: { type: String, required: true },
  cameranum: { type: String, required: true },
  features: { type: String, required: true },
  os: { type: String, required: true },
  internalmemory: { type: Number, required: true },
  maincamera: { type: String, required: true },
});

const Mobile = models.User || model("Mobile", mobileschema);

export default Mobile;
