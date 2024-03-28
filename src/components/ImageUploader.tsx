// "use client";
// import { CldUploadWidget } from "next-cloudinary";
// import { useState } from "react";

// interface ImageUploadWidgetProps {
//   uploadPreset: string;
//   onUploadSuccess: (result: any) => void;
// }

// const ImageUploadWidget: React.FC<ImageUploadWidgetProps> = ({
//   uploadPreset,
//   onUploadSuccess,
// }) => {
//   const [resource, setResource] = useState<any>(null);

//   const handleUploadSuccess = (result: any, { widget }: any) => {
//     setResource(result?.info);
//     widget.close();
//     onUploadSuccess(result?.info);
//   };

//   const handleOpen = () => {
//     setResource(null);
//   };

//   return (
//     <CldUploadWidget
//       uploadPreset={uploadPreset}
//       onSuccess={handleUploadSuccess}
//     >
//       {({ open }) => {
//         return (
//           <button
//             onClick={() => {
//               open();
//               handleOpen();
//             }}
//           >
//             Upload an Image
//           </button>
//         );
//       }}
//     </CldUploadWidget>
//   );
// };

// export default ImageUploadWidget;
