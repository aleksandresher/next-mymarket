// "use client";
// import { useEffect, useState } from "react";
// import { useSession, getProviders, signOut, signIn } from "next-auth/react";
// import { redirect, usePathname } from "next/navigation";

// interface Provider {
//   id: string;
//   name: string;
//   type: string;
//   signinUrl: string;
//   callbackUrl?: string;
//   namespace?: string;
//   clientId?: string;
// }
// export default function NavBar() {
//   const { data: session } = useSession();
//   const [providers, setProviders] = useState<Provider[]>([]);
//   const pathname = usePathname();

//   useEffect(() => {
//     (async () => {
//       const res = await getProviders();
//       res?.null;
//       if (res) {
//         setProviders(Object.values(res));
//       }
//     })();
//   }, []);

//   console.log(pathname);

//   useEffect(() => {
//     if (
//       session?.user &&
//       !pathname.startsWith("/admin/dashboard") &&
//       pathname !== "/"
//     ) {
//       redirect("/admin/dashboard");
//     }
//   }, [session, pathname]);

//   async function logOutCustom() {
//     try {
//       await signOut({ callbackUrl: "/" });
//     } catch (error) {
//       console.error("Error during logout:", error);
//     }
//   }

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="h-[40px]">
//         {providers &&
//           Object.values(providers).map((provider) => (
//             <button
//               type="button"
//               key={provider.name}
//               onClick={() => signIn(provider.id)}
//               className="bg-[#38b000] hover:bg-[#008000] p-2 rounded-[8px] text-white"
//             >
//               Sign In
//             </button>
//           ))}
//       </div>
//     </main>
//   );
// }
