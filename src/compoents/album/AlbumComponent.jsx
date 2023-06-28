import './AlbumComponent.css'
import { useState } from 'react'
import SongComponent from '../song/SongComponent'
import song from '../data'

const AlbumComponent = () => {
  
  const [Song, setSong] = useState(song);

  const handleLike = (songId) => {
    setSong(
        Song.map(item =>
        item.id === songId ? { ...item, like: !item.like } : item
      ) 
    );
  };


  return (
    <>
      <h2 className='h2__mode'>Lista de canciones</h2>
      <div className='box'>
        <div className='box-container'>
          { Song.map((item) => (
            <li key={item.id}>{
              <SongComponent
                id={item.id} 
                image={item.cover_url} 
                name={item.name} artist={item.artist} 
                album={item.album} 
                year={item.year} 
                like={item.like} 
                genre={item.genre} 
                handleLike ={handleLike}/>
            }</li>
          ))}
        </div>
      </div>
    </>
  )
}

export default AlbumComponent