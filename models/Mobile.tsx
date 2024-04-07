import { Schema, model, models } from "mongoose";

interface IMobile {
  title: string;
  image: string;
  category: string;
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
  selfcamera: number;
  simnum: number;
  simtype: string;
  published: number;
  screensize: number;
  screentype: string;
  battery: number;
  cameranum: number;
  features: string;
  os: string;
  internalmemory: number;
  maincamera: number;
  condition: string;
}

const mobileschema = new Schema<IMobile>(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    place: { type: String, required: true },
    category: { type: String, required: true },
    owner: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    vipplus: { type: Boolean, required: true },
    vip: { type: Boolean, required: true },
    supervip: { type: Boolean, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    osversion: { type: String, required: true },
    selfcamera: { type: Number, required: true },
    simnum: { type: Number, required: true },
    simtype: { type: String, required: true },
    published: { type: Number, required: true },
    screensize: { type: Number, required: true },
    screentype: { type: String, required: true },
    battery: { type: Number, required: true },
    cameranum: { type: Number, required: true },
    features: { type: String, required: true },
    os: { type: String, required: true },
    internalmemory: { type: Number, required: true },
    maincamera: { type: Number, required: true },
    condition: { type: String, required: true },
  },
  { timestamps: true }
);

const Mobile = models.Mobile || model("Mobile", mobileschema);

export default Mobile;
