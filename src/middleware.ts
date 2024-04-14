import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/api/:path*",
    "/api/webhooks/clerk",
    "/shop/[category]/[id]/:path*",
  ],
  apiRoutes: ["/api/dashboard(.*)"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
