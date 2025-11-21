import { NextResponse, type NextRequest } from "next/server";

// ... existing code ...
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/robots") ||
    pathname.startsWith("/sitemap")
  ) {
    return NextResponse.next();
  }

  if (pathname === "/") {
    const pref = req.cookies.get("preferredWorkshop")?.value;
    if (pref === "krawedzi" || pref === "kola") {
      const url = req.nextUrl.clone();
      url.pathname = `/${pref}`;
      return NextResponse.redirect(url, 307);
    }
    return NextResponse.next(); // brak ciastka → renderuj "/" (2 sekcje)
  }

  return NextResponse.next();
}
// ... existing code ...
