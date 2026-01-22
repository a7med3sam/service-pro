import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedPaths = [
  "/checkout",
  "/my-services",
  "/order-details-edit",
  "/order-details-previous",
  "/services-get-started",
  "/profile",
];
const loginPath = "/login";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const cookie = req.cookies.get("isLoggedIn");
  const isLoggedIn = cookie?.value === "true";

  if (pathname === loginPath && isLoggedIn) {
    return NextResponse.redirect(new URL("/my-services", req.url));
  }

  if (protectedPaths.some((path) => pathname.startsWith(path)) && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login",
    "/checkout/:path*",
    "/my-services/:path*",
    "/order-details-edit/:path*",
    "/order-details-previous/:path*",
    "/services-get-started/:path*",
    "/profile/:path*",
  ],
};
