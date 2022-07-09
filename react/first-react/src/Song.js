import Rating from './Rating'
export default function Song({ songName, songBy, image, rating }) {
    return(<>
        <div className="song-container">
            <span></span>
            <span>{songName} By </span>
            <span className='artist-name'>{songBy}</span>
            <span><Rating rating={rating}/></span>
        </div>
    </>)
}