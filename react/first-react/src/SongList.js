import Song from "./Song"
export default function SongList({ songs }) {
    return (<>

    <h4>Popular songs of the week</h4>

    {songs.map(x => <Song songName={x.songName} songBy={x.songBy} image={x.image} rating={x.rating} />)}
    </>)
}