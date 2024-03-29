import Image from "next/image";
import styles from "./styles/page.module.css";
import MainLayout from "@/components/UiComponents/MainLayout/MainLayout";
import Hero from "@/components/Hero/Hero";
import CardsWrapper from "@/components/CardsWrapper/CardsWrapper";
import Card from "@/components/Card/Card";
import Jobs from "@/Data/JobsData.json"

export default function Home() {


  async function insertData() {

    try {

      const insertManyJobs = Jobs.map((job) => prisma.job.create({

        data: {
          id: job.id,
          title: job.title,
          type: job.type,
          description: job.description,
          location: job.location,
          salary: job.salary,
          companyId: job.company.id,
        }

      }))

      const results = await Promise.all(insertManyJobs)
      console.log(results);


    } catch (error) {

      console.error(error)
    }

  }


  insertData().catch((e) => {
    throw e
  }).finally(async () => {
    await prisma.$disconnect()
  })


  return (
    <>
      <Hero />

      <MainLayout>

        <CardsWrapper>

          <Card
            background="slate"
            buttonBackground="slate__card__button"
            title="For Developers"
            paragraph="Browse our React jobs and start your career today"
          />


          <Card
            background="gray"
            buttonBackground="gray__card__button"
            title="For Developers"
            paragraph="Browse our React jobs and start your career today"
          />

        </CardsWrapper>


      </MainLayout >

    </>
  );
}
