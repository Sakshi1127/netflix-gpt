import {API_OPTIONS} from "../utils/contants";
import { useEffect } from "react";
import {useDispatch} from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

export const usePopularMovies=()=>{
    const dispatch = useDispatch();

    const getPopularMovies= async()=>{
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", API_OPTIONS)
        const data = await response.json();
        dispatch(addPopularMovies(data.results))
    }

    useEffect(()=>{
        getPopularMovies();
    },[])

}

