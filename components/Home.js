import Row from "./Row";
import requests from "../requests";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      ></Row>
      <Row title="Trending now" fetchUrl={requests.fetchTrending}></Row>
      <Row
        title="Top rated movies"
        fetchUrl={requests.fetchTopRatedMovies}
      ></Row>
      <Row title="Popular movies" fetchUrl={requests.fetchPopularMovies}></Row>
      <Row title="Popular TV shows" fetchUrl={requests.fetchPopularTv}></Row>
    </div>
  );
};

export default Home;
