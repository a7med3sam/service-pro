import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const res = NextResponse.json({ success: true });

  res.cookies.set("isLoggedIn", "true", {
    path: "/",
    maxAge: 60 * 60,
    httpOnly: false,
  });

  return res;
}
