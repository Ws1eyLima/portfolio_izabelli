import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const language = request.nextUrl.searchParams.get("lang") === "en" ? "en" : "pt";

  requestHeaders.set("x-portfolio-language", language);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: "/",
};
