/*
 * @jsxImportSource @emotion/react
 */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import axios from "../src/axios";
import Image from "next/image";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const imagesUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const getMovies = async () => {
      const res = await axios(fetchUrl);
      setMovies(res.data.results);
      return res;
    };
    getMovies();
  }, [fetchUrl]);

  return (
    <div>
      <h2>{title}</h2>
      <div
        css={css`
          display: flex;
        `}
      >
        {movies.map((element) => (
          <div
            key={element.id}
            css={css`
              object-fit: contain;
              width: 100%;
              max-height: 100px;
            `}
          >
            <Image
              src={`${imagesUrl}${element.poster_path}`}
              alt={element.name}
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;
