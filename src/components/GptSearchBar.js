import React, { useRef } from "react";
import openai from "../utils/openai";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { gptMovieRecommendation } from "../utils/gptMovieConstants";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lan);
  const searchText = useRef(null);

  // Search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value);
    // Make an API call to GPT API and get movie results

    // Commented the code due to not having access to OpenAI API services due to the Payment issues
    // const gptQuery =
    //   "Act as a movie recommendation system and suggest some movies for the query" +
    //   searchText.current.value +
    //   "only give names of 5 movies, comma seperated like the example given ahead. Example Result: DJ Tillu, Krack, Salaar, Kick, Rogue";

    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log(gptResults.choices);
    const gptResults = gptMovieRecommendation;

    if (!gptResults) {
      //Error Handling
    }
    // 'Pokiri', ' Idiot', ' Julayi', ' Kick', ' Jalsa'
    const gptMovies = gptResults[0]?.message?.content.split(",");
    console.log(gptMovies);

    // ['Pokiri', ' Idiot', ' Julayi', ' Kick', ' Jalsa']

    // For each movie I will search TMDB API

    const data = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise,Promise,Promise,Promise,Promise]
    const tmdbResults = await Promise.all(data);
    console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          s
          className="p-4 m-4 col-span-9"
        />
        <button
          className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
