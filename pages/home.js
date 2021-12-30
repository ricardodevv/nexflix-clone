import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Row from "../components/Row";
import requests from "../requests";

const home = () => {
  return (
    <Layout pageTitle="Netflixapp - Home Page">
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
        <Row
          title="Popular movies"
          fetchUrl={requests.fetchPopularMovies}
        ></Row>
        <Row title="Popular TV shows" fetchUrl={requests.fetchPopularTv}></Row>
      </div>
    </Layout>
  );
};

export default home;
