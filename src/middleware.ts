import { NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

// Get the preferred locale, similar to the above or using a library
let locales = ["en-US", "vi-VN"];
let defaultHeadersLocale = "en-US,en;q=0.5";
let defaultLocale = "en-US";

function getLocale(request: NextRequest) {
  let localeHeaders = {
    "accept-language":
      request.headers.get("accept-language") || defaultHeadersLocale,
  };
  let languages = new Negotiator({ headers: localeHeaders }).languages();
  const matchLocale = match(languages, locales, defaultLocale);
  return matchLocale;
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
