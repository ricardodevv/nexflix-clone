/*
 * @jsxImportSource @emotion/react
 */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import axios from "../src/axios";
import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const imagesUrl = "https://image.tmdb.org/t/p/original/";

  console.log(movies.map((el) => el));

  useEffect(() => {
    const getMovies = async () => {
      const res = await axios(fetchUrl);
      setMovies(res.data.results);
      return res;
    };
    getMovies();
  }, [fetchUrl]);

  return (
    <div
      css={css`
        padding: 1rem;
      `}
    >
      <h2>{title}</h2>
      <div
        css={css`
          display: flex;
          overflow-y: hidden;
          overflow-x: scroll;
          padding: 20px;
          ::-webkit-scrollbar {
            display: none;
          }
        `}
      >
        {movies.map((element) => (
          <div
            key={element.id}
            css={css`
              width: 100%;
              margin-right: 10px;
              transition: transform 450ms;
              cursor: pointer;
              border: 2px solid #111;

              :hover {
                border: 2px solid white;
                ${isLargeRow
                  ? `transform: scale(1.09);`
                  : `transform: scale(1.08);`}
              }
              ${isLargeRow ? `max-height: 254px` : `max-height: 154px`}
            `}
          >
            <Image
              src={`${imagesUrl}${
                isLargeRow ? element.poster_path : element.backdrop_path
              }`}
              alt={element.name}
              width={`${isLargeRow ? 200 : 250}`}
              height={`${isLargeRow ? 250 : 150}`}
              className={{ border: "1px solid" }}
              layout="fixed"
              objectFit="fill"
            />
            <div
              css={css`
                display: flex;
                flex-direction: column;
                justify-content: center;
                text-align: center;
                transition: all 0.2s;
                width: 100%;
                height: 100%;
                position: relative;
                top: ${isLargeRow ? "-254px" : "-154px"};
                :hover {
                  background-color: #00000080;

                  h3,
                  i {
                    opacity: 1;
                  }
                }
              `}
            >
              <i
                css={css`
                  flex: 1;
                  display: flex;
                  justify-content: center;
                  transition: all 0.3s;
                  opacity: 0;

                  .MuiSvgIcon-root {
                    width: 5rem;
                    height: 5rem;
                    align-self: center;
                  }
                `}
              >
                <PlayArrowIcon />
              </i>
              <h3
                css={css`
                  font-size: calc(100%);
                  transition: all 0.3s;
                  opacity: 0;
                `}
              >
                {element.name ? element.name : element.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;
