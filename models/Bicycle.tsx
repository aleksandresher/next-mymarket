import { Schema, model, models } from "mongoose";

interface IBicycle {
  title: string;
  image: string;
  description: string;
  price: number;
  owner: string;
  place: string;
  vipplus: boolean | false;
  vip: boolean | false;
  supervip: boolean | false;
  condition: string;
  amortization: boolean | false;
  folding: boolean | false;
  type: string;
  speedometr: boolean | false;
  size: number;
  category: string;
}

const bicycleschema = new Schema<IBicycle>(
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
    amortization: { type: Boolean, required: true },
    folding: { type: Boolean, required: true },
    size: { type: Number, required: true },
    speedometr: { type: Boolean, required: true },
    type: { type: String, required: true },
    condition: { type: String, required: true },
  },
  { timestamps: true }
);

const Bicycle = models.Bicycle || model("Bicycle", bicycleschema);

export default Bicycle;
