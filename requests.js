const API_KEY = "808f658a1fe5578449ea621b926677e6";

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_networks=213`,
  fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchPopularTv: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;
