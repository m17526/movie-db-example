const API_KEY = process.env.API_KEY;

export default {
  action: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  adventure: {
    title: "Adventure",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  },
  animation: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  comedy: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  crime: {
    title: "Crime",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
  },
  documentary: {
    title: "Documentary",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  },
  drama: {
    title: "Drama",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  },
  family: {
    title: "Family",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  },
  fantasy: {
    title: "Fantasy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
  },
  history: {
    title: "History",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
  },
  music: {
    title: "Music",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10402`,
  },
  mystery: {
    title: "Mystery",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },
  romance: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  scienceFiction: {
    title: "Science Fiction",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  tv: {
    title: "TV Movie",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },
  thriller: {
    title: "Thriller",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  },
  war: {
    title: "War",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
  },
  western: {
    title: "Western",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
};
