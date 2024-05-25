/*



*/

export async function POST(request: Request) {
  const reqBody = request.json();

  //   return Response.json({ res: reqBody.incomingRequest });

  return new Response(JSON.stringify(reqBody));
}
