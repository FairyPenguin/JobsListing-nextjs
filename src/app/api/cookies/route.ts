import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

/**
 *
 *
 *
 *
 */

/**
 *
 * @param request
 * @returns
 */

export async function GET(request: NextRequest) {
  //read the headers
  const requestHeaders = new Headers(request.headers);

  //Extract the needed header value
  const authorizationToken = requestHeaders.get("Authorization");

  console.log(authorizationToken);

  // the returned data(headers) are Read-only
  const headersFunction = headers().get("host");

  console.log(headersFunction);

  const themeCookie = request.cookies.get("theme");

  console.log(themeCookie);

  cookies().set("id", "20");

  const cookie = cookies().get("id");

  console.log(cookie);

  return new Response("200 OK Sucess -- Headres route", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
