import './AlbumComponent.css'
import React, { useState } from 'react';

const AlbumComponent = (props) => {

return (
  <>
    <div className="card">
      <img src={props.image} />
      <div className='card__info'> 
        <h1 className='name'>{props.name}</h1> 
        <h3 className='artista'>{props.artist}</h3>
        <h2 className='album'>{props.album}</h2>
        <h2 className='year'>({props.year})</h2>
        <div>
          <button className='genre'>{props.genre}</button>
          <div className='like-button'>
            <button  className={`like-button ${props.like ? 'liked' : ''}`} onClick={props.handleLike}>
              {props.like ? '❤️' : '♡'}
            </button>
          </div>
        </div>
        
      </div>
    </div>
  </>
)
}

export default AlbumComponent