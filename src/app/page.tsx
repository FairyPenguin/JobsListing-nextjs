// import Image from "next/image";
// import styles from "./styles/page.module.css";
import MainLayout from "@/components/UiComponents/MainLayout/MainLayout";
import Hero from "@/components/Hero/Hero";
import CardsWrapper from "@/components/CardsWrapper/CardsWrapper";
import Card from "@/components/Card/Card";
import printTo100 from "../../utilities/Print100";
import JobsList from "@/components/JobsList/JobsList";
import ViewAll from "@/components/ViewAll/ViewAll";
// import Jobs from "@/Data/JobsData.json";
// import prisma from "../../utilities/prismaDB";

export default function Home() {
  // printTo100();

  return (
    <>
      <Hero
        title={"Jobs for the JavaScript Devs"}
        subtitle={"Find the job that fits your skills and needs"}
      />

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
      </MainLayout>
      <JobsList />
      <ViewAll />
    </>
  );
}
