import Image from "next/image";
import styles from "./styles/page.module.css";
import MainLayout from "@/components/UiComponents/MainLayout/MainLayout";
import Hero from "@/components/Hero/Hero";
import CardsWrapper from "@/components/CardsWrapper/CardsWrapper";
import Card from "@/components/Card/Card";

export default function Home() {
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
