const objsArray = [
  { id: 1, text: "String8080" },
  { id: 2, text: "String3003" },
  { id: 3, text: "String3000" },
  { id: 4, text: "String5432" },
  { id: 5, text: "String8000" },
];

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const requestedId = parseInt(params.id);

  const deletedIndex = objsArray[requestedId];
  console.log(requestedId);

  console.log(objsArray);

  const updatedArray = objsArray.filter((obj) => {
    return obj.id !== requestedId;
  });

  console.log(updatedArray);

  return Response.json({ updatedArray });
}
