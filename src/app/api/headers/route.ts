import { headers } from "next/headers";
import { NextRequest } from "next/server";

/**
 *
 * @param request
 * @returns
 */

/**
 * to read the headres coming with request
 * 1- Through the request object
 *
 * 2- Headers function from Nextjs
 *
 * 3- to set the headers you need to return a new Response with the new headers
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

  return new Response("200 OK Sucess -- Headres route", {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
