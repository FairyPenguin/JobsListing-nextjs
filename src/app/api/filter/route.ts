import { type NextRequest } from "next/server";

const objsArray = [
  { id: 1, text: "String8080" },
  { id: 2, text: "String3003" },
  { id: 3, text: "String3000" },
  { id: 4, text: "String5432" },
  { id: 5, text: "String8000" },
];
/**
 *
 * @param request
 *
 *
 * @returns
 */

export async function GET(request: NextRequest) {
  // access all query params
  const searchParams = request.nextUrl.searchParams;

  //get the needed query value
  const query = searchParams.get("id");

  const filteredObjs = query
    ? objsArray.filter((obj) => {
        return obj.id === parseInt(query);
      })
    : objsArray;

  // const id = parseInt(params.id);

  return Response.json(filteredObjs);
}
