import { useRouter, redirect } from "next/navigation";

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
 * @returns
 */

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  if (parseInt(params.id) > objsArray.length) {
    redirect("http://localhost:3000/api/get");
  }
  const requestId = parseInt(params.id);

  return Response.json({ requestId });
}
