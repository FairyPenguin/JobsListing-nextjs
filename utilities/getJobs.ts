import prisma from "./prismaDB";

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

// getJobs().catch((e) => {
//     throw e
// }).finally(async () => {
//     await prisma.$disconnect()
// })

export default getJobs;
