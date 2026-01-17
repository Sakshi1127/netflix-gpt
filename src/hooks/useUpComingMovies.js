import {API_OPTIONS} from "../utils/contants";
import { useEffect } from "react";
import {useDispatch} from "react-redux";
import  { addUpComingMovies } from "../utils/movieSlice";

export const useUpComingMovies=()=>{
    const dispatch = useDispatch();

    const getUpComingMovies= async()=>{
        const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", API_OPTIONS)
        const data = await response.json();
        dispatch(addUpComingMovies(data.results))
    }

    useEffect(()=>{
        getUpComingMovies();
    },[])

}

