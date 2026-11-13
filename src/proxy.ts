import { NextResponse, type NextRequest } from "next/server";

/**
 * Route guard (Next 16 "proxy", formerly middleware).
 *
 * /admin and /dashboard are placeholders with no authentication yet, so they
 * are closed until an auth provider is configured (AUTH_SECRET set). When auth
 * is added, replace the check below with a real session lookup.
 */
export function proxy(request: NextRequest) {
  const authConfigured = Boolean(process.env.AUTH_SECRET);
  if (!authConfigured) {
    return NextResponse.rewrite(new URL("/not-found-guard", request.url), { status: 404 });
  }
  // TODO(auth): verify session cookie / role (ADMIN for /admin) and redirect to /signin if missing
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/dashboard/:path*"],
};
