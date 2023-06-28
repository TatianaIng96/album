import './Song.css'

const SongComponent = ({
  id,
  image,
  name,
  artist,
  album,
  year,
  like,
  genre,
  handleLike
}) => {

return (
  <>
    <div className="card">
      <img src={image} />
      <div className='card__info'> 
        <h1 className='name'>{name}</h1> 
        <h3 className='artista'>{artist}</h3>
        <h2 className='album'>{album}</h2>
        <h2 className='year'>({year})</h2>
        <div>
          <button className='genre'>{genre}</button>
          <div className='like-button'>
            <button  className={`like-button ${like ? 'liked' : ''}`} 
                      onClick={()=>handleLike(id)}>
              {like ? '❤️' : '♡'}
            </button>
          </div>
        </div>
        
      </div>
    </div>
  </>
)
}

export default SongComponent;