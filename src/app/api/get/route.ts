import prisma from "../../../../utilities/prismaDB";
/*

0- create a folder [The folder name will
   be the route param in the url]

1- create a route.ts file 

2- Export an async function with 
the REST http verbs [GET POST PUT DELETE]

3- ** You can use nested folders for / --- / --- /

Note:: Here this means if they are both inside 
 the same folder the route.ts & page.ts
4- If there are a route.ts and page.ts
 have the same route folder name the route.ts  will takeover
Fix:: Move the route folder to an 
api folder /api/routefolder/route.ts

Fix2:: create teh api folder inside the routefolder like this 
/routefolder/api/route.ts ==> the url will be the param/api
*/

async function getJobs() {
  try {
    const getJobs = await prisma.job.findMany();

    const jobsResults = await Promise.all(getJobs);

    // console.log(jobsResults);

    return jobsResults;
  } catch (error) {
    console.error(error);
  }
}

// GET Method:: ==> /get End-Point
export async function GET() {
  const jobs = await getJobs();
  //   return new Response("You GET it ?!");
  return Response.json(jobs);
}
