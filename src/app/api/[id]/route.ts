/**
 *
 * @param request
 *
 *
 * @returns
 */

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  return Response.json(id);
}