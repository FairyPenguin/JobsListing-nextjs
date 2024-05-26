export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const requestId = parseInt(params.id);

  return Response.json(requestId);
}
