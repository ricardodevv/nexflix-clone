/*
 * @jsxImportSource @emotion/react
 */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import axios from "../src/axios";
import requests from "../requests";

const BannerStyled = styled.header`
  background-size: cover;
  background-image: url(${(props) => props.url});
  background-position: center center;
  object-fit: contain;
  height: 448px;

  .banner__fadeBottom {
    height: 16.4rem;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(37, 37, 37, 0.61),
      #111
    );
  }
`;

const BannerContents = styled.div`
  margin-left: 30px;
  padding-top: 140px;
  height: 190px;

  .banner__title {
    font-size: 3rem;
    font-weight: 800;
    padding-bottom: 0.3rem;
    margin-top: 3rem;
  }

  .banner__description {
    font-size: 0.8rem;
    width: 45rem;
    line-height: 1.3;
    padding-top: 1rem;
    max-width: 360px;
    height: 80px;
  }

  button {
    cursor: pointer;
    color: white;
    outline: none;
    border: none;
    font-weight: 700;
    border-radius: 0.2vw;
    padding: 0.5rem 2rem 0.5rem 2rem;
    margin-right: 1rem;
    background-color: rgba(51, 51, 51, 0.5);

    :hover {
      color: black;
      background-color: white;
      transition: all 0.2s;
    }
  }
`;

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    };
    fetchData();
  }, []);

  console.log(movie);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <BannerStyled
      url={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
    >
      <BannerContents>
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div>
          <button>Play</button>
          <button>My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </BannerContents>
      <div className="banner__fadeBottom"></div>
    </BannerStyled>
  );
};

export default Banner;
