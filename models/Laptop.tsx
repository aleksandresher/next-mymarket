import { Schema, model, models, Document } from "mongoose";

// Define the subdocument schema for specifications
interface SpecificationsType {
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

// Define the main document schema
interface ILaptop extends Document {
  title: string;
  image: string;
  description: string;
  price: number;
  owner: string;
  place: string;
  vipplus: boolean | false;
  vip: boolean | false;
  supervip: boolean | false;
  specifications: SpecificationsType[];
}

const specificationSchema = new Schema<SpecificationsType>({
  brand: { type: String, required: true },
  hdd: { type: Number, required: true },
  ssd: { type: Number, required: true },
  published: { type: Number, required: true },
  videocard: { type: String, required: true },
  ram: { type: Number, required: true },
  os: { type: String, required: true },
  cpufrequence: { type: Number, required: true },
  cpu: { type: String, required: true },
  condition: { type: String, required: true },
  resolution: { type: String, required: true },
});

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
    specifications: [specificationSchema], // Array of the subdocument schema
  },
  { timestamps: true }
);

const Laptop = models.Laptop || model<ILaptop>("Laptop", laptopschema);

export default Laptop;
