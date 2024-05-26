/*



*/

export async function POST(request: Request) {
  const res = await request.json();

  return Response.json(
    { res },
    {
      headers: {
        "Content-Type": "application/josn",
      },
      
      status: 201,
    }
  );

  //   return new Response(JSON.stringify(reqBody));
}
