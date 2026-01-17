import Header from "./Header";
import { useNowPlayingMovies } from "../hooks/useNowPlaylingMovies";
import { usePopularMovies } from "../hooks/usePopularMovies";
import  { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import { useUpComingMovies } from "../hooks/useUpComingMovies";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondContainer />
    </div>
  )
}

export default Browse
