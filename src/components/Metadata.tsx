// import { Metadata, ResolvingMetadata } from "next";
// import { loadSingle } from "@lib/load-single";

// type Props = {
//   params: { id: string; category: string };
// };

// export async function generateMetadata(
//   { params }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   const category = params.category;
//   const id = params.id;

//   const product = loadSingle(category, id);

//   return {
//     title: product?.title,

//     },
//   };
// }

// export default function Page({ params, searchParams }: Props) {}
