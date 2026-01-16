import useMoivieVideoTrailer from '../hooks/useMovieVideoTrailer';
import {useSelector} from 'react-redux';

const VideoBackground = ({id}) => {
  useMoivieVideoTrailer(id);
    const trailerVideo= useSelector((store)=> store.movies.trailerVideo);

  return (
    <div>
      <iframe className='w-screen aspect-video'
      src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}`}      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" 
      ></iframe>
    </div>
  )
}

export default VideoBackground
