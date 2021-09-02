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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    grid-gap: 10px;
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
  const res = await fetch("http://localhost:3000/api/product")
  const data = await res.json()

  return {
    props: {
      results: data.results
    },
  };
}