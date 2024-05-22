async function insertData() {
  try {
    const insertManyJobs = Jobs.map((job) =>
      prisma.job.create({
        data: {
          id: job.id,
          title: job.title,
          type: job.type,
          description: job.description,
          location: job.location,
          salary: job.salary,
          companyId: job.company.id,
        },
      })
    );

    const jobsResults = await Promise.all(insertManyJobs);

    const insertManyCompanies = Jobs.map((company) =>
      prisma.company.create({
        data: {
          id: company.company.id,
          name: company.company.name,
          description: company.company.description,
          contactEmail: company.company.contactEmail,
          contactPhone: company.company.contactPhone,
        },
      })
    );

    const companiesResults = await Promise.all(insertManyCompanies);

    console.log(jobsResults);
    console.log(companiesResults);
  } catch (error) {
    console.error(error);
  }
}

// insertData().catch((e) => {
//     throw e
// }).finally(async () => {
//     await prisma.$disconnect()
// })

/* 

createMany() is a method on Prisma Client, released back in version 2.16.0, that lets you insert multiple records into your database at once. This can be really useful when seeding your database or inserting bulk data.

Here is an example of using createMany() to create new users:

const users = await prisma.user.createMany({
  data: [
    { name: 'Sonali', email: 'sonali@prisma.io' },
    { name: 'Alex', email: 'alex@prisma.io' },
    { name: 'Yewande', email: 'yewande@prisma.io' },
    { name: 'Angelina', email: 'angelina@prisma.io' },
  ],
})


*/

export default insertData;
