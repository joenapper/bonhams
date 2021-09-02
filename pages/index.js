import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import { Card, Pagination } from "../components";
import styles from "../styles/home.module.css";

const Main = styled.main`
  max-width: 1200px;
  margin: auto;
  padding: 10px;
  
  .cards {
    display: flex;
  }
`;

export default function Home({ results }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Tech Test</title>
        <meta name="description" content="Tech Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <h1>Live Pairing Tech Test</h1>

        <section className="cards">
          {results.map(({ id, name, description, price, image }) => (
            <Card
              key={id}
              name={name}
              description={description}
              price={price}
              image={image}
            />
          ))}
        </section>

        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </Main>
    </div>
  );
}

export async function getServerSideProps() {
  const fetchUrl = "http://localhost:3000/api/product";

  return {
    props: {
      results: [
        {
          name: "Unbranded Concrete Gloves",
          description:
            "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
          price: "860.00",
          image: "http://placeimg.com/640/480/cats",
          id: "123",
        },
        {
          id: "24523",
          name: "Gorgeous Wooden Chicken",
          description:
            "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
          image: "http://placeimg.com/640/480/nightlife",
        },
      ],
    },
  };
}