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
      <div>
        {movies.map((element) => (
          <div key={element.id}>
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
