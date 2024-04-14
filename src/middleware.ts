import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/api/:path*",
    "/api/webhooks(.*)",
    "/shop/[category]/[id]/:path*",
    "/shop/:path*",
  ],
  apiRoutes: ["/api/dashboard(.*)"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
