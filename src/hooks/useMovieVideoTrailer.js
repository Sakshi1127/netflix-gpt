import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/contants';
import { addTrailerVideo } from '../utils/movieSlice';

const useMovieVideoTrailer = (movieId) => {
    const dispatch = useDispatch();
    const getMovieTrailer = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+ movieId +"/videos", API_OPTIONS);
        const json = await data.json();
        const trailerList = json.results.filter((video) => video.type === "Trailer" && video.site === "YouTube");
        const trailers = trailerList.length > 0 ? trailerList[0] : json.results[0];
        dispatch(addTrailerVideo(trailers));
    }
    useEffect(() => {
        if(!movieId) return;
        getMovieTrailer();
    }, [movieId])
}

export default useMovieVideoTrailer;