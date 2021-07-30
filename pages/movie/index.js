import Head from "next/head";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Results from "../../components/Results";
import requests from "../../utils/requestsHeader";

export default function Movie({ results }) {
  return (
    <div>
      <Head>
        <title>Movie DB</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />

      {/* Nav */}
      <Nav />

      {/* Results */}
      <Results results={results} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `https://api.themoviedb.org/3${requests.fetchTrending.url}`
  );
  const data = await res.json();

  return {
    props: {
      results: data.results,
    },
  };
}

// export async function getServerSideProps(context) {
//   const genre = context.query.genre;

//   const request = await fetch(
//     `https://api.themoviedb.org/3${
//       requests[genre]?.url || requests.fetchTrending.url
//     }`
//   ).then((res) => res.json());

//   return {
//     props: {
//       results: request.results,
//     },
//   };
// }
