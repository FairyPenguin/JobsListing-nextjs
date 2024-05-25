/*



*/

export async function POST(request: Request) {
  const reqBody = request.body;

  if (reqBody !== null) {
    return Response.json({ reqBody });
  }
}
