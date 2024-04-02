import { Schema, model, models } from "mongoose";

interface ILaptop {
  title: string;
  image: string;
  description: string;
  price: number;
  owner: string;
  place: string;
  vipplus: boolean | false;
  vip: boolean | false;
  supervip: boolean | false;
  brand: string;
  hdd: number;
  ssd: number;
  published: number;
  videocard: string;
  ram: number;
  os: string;
  cpufrequence: number;
  cpu: string;
  condition: string;
  resolution: string;
}

const laptopschema = new Schema<ILaptop>(
  {
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
    published: { type: Number, required: true },
    os: { type: String, required: true },
    condition: { type: String, required: true },
    resolution: { type: String, required: true },
    cpu: { type: String, required: true },
    cpufrequence: { type: Number, required: true },
    ram: { type: Number, required: true },
    videocard: { type: String, required: true },
    ssd: { type: Number, required: true },
    hdd: { type: Number, required: true },
  },
  { timestamps: true }
);

const Laptop = models.Laptop || model("Laptop", laptopschema);

export default Laptop;
