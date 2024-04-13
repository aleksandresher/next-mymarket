// import NextAuth from "next-auth/next";
// import GoogleProvider from "next-auth/providers/google";
// import { connectToDB } from "@/utils/database";
// import CredentialsProvider from "next-auth/providers/credentials";

// import User from "../../../../../models/User";

// const handler = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     CredentialsProvider({
//       name: "Credentials",

//       credentials: {
//         email: {
//           label: "Email",
//           type: "text",
//           placeholder: "example@gmail.com",
//         },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials, req) {
//         // const user = { id: "1", name: "J smith", email: "sjsd@gmail.com" };
//         const user = await User.findOne({ email: req.email });

//         if (user) {
//           return user;
//         } else {
//           return null;
//         }
//       },
//     }),
//   ],

//   callbacks: {
//     async session({ session, status }) {
//       const sessionUser = await User.findOne({
//         email: session.user.email,
//       });

//       session.user.id = sessionUser._id.toString();
//       session.user.role = sessionUser.role;
//       session.user.status = status;

//       return session;
//     },
//     async signIn({ profile }) {
//       try {
//         await connectToDB();

//         const userExists = await User.findOne({ email: profile.email });

//         if (!userExists) {
//           await User.create({
//             email: profile.email,
//             username: profile.name.replace(" ", "").toLowerCase(),
//             role: "user",
//           });
//         }
//         return true;
//       } catch (error) {
//         console.log(error);
//         return false;
//       }
//     },
//   },
// });

// export { handler as GET, handler as POST };
