import Head from "next/head";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Results from "../../components/Results";
import requests from "../../utils/requestsGenre";

function Genre({ results }) {
  if (!results) {
    return <div>not found</div>;
  }
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

// `https://api.themoviedb.org/3${requests.Action.url}`

// console.log(`https://api.themoviedb.org/3${requests[genre].url}`);
// const router = useRouter();
// const { genre } = router.query;

export const getStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export const getStaticProps = async (context) => {
  console.log(context);
  const genre = context.params.genre;
  if (requests[genre]) {
    const res = await fetch(
      `https://api.themoviedb.org/3${requests[genre].url}`
    );
    // https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=18
    const data = await res.json();

    return {
      props: {
        results: data.results,
      },
    };
  } else {
    return {
      props: {
        results: null,
      },
    };
  }
};

export default Genre;
