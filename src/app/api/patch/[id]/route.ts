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
 * @param param1
 * @returns
 */

export async function PATCH(
  request: Request & { json: () => Promise<{ text: String }> },
  { params }: { params: { id: string } }
) {
  const requestId = parseInt(params.id);

  const reqBody = await request.json();
  const { text } = reqBody;

  const index = objsArray.findIndex((obj) => obj.id === requestId);

  objsArray[index].text = text;

  console.log(objsArray[index]);

  return Response.json({ text, requestId });
}

export { objsArray };
