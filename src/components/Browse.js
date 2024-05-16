import Header from "./Header";
import useNowPlayingMovies from "../customhooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../customhooks/usePopularMovies";
import useTopRatedMovies from "../customhooks/useTopRatedMovies";
import useUpcomingMovies from "../customhooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
