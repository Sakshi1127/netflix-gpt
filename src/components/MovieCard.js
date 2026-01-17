import { IMG_CDN_URL } from '../utils/contants';

const MovieCard =({posterPath}) =>{
    return(
        <div className='w-40 pr-2'>
            <img alt='logo' src={IMG_CDN_URL+ posterPath} className='w-48 pr-2'/> 
        </div>
    )
}

export default MovieCard;