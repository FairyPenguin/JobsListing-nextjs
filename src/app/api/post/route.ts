/*



*/

export async function POST(request: Request) {
  const reqBody = request.json();

  return Response.json(reqBody);
}
