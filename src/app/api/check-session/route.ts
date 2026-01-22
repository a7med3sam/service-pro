import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const cookieStore = req.headers.get("cookie") || "";
  const cookies = Object.fromEntries(
    cookieStore
      .split("; ")
      .filter(Boolean)
      .map((c) => {
        const [key, ...rest] = c.split("=");
        return [key, rest.join("=")];
      }),
  );

  const loggedIn = cookies["isLoggedIn"] === "true";

  return NextResponse.json({ loggedIn });
}
