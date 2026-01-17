import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondContainer = () => {
  const movies = useSelector((store) => store.movies);
  const nowPlayingMovies = movies?.nowPlaying
  const popularMovies = movies?.popularMovies
  const topRatedMovies = movies?.topRatedMovies
  const upComingMovies = movies?.upComingMovies

  return (
    <>
      {movies && (
        <>
          <div className="bg-black">
            <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
              <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
              <MovieList title={"Popular"} movies={popularMovies} />
              <MovieList title={"Top Rated"} movies={topRatedMovies} />
              <MovieList title={"Upcoming"} movies={upComingMovies} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SecondContainer;
