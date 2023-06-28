import { useState } from 'react'
import './App.css'
import AlbumComponent from './compoents/album/AlbumComponent'


const image = "https://res.cloudinary.com/ddvvitaco/image/upload/c_thumb,g_faces,h_800,w_800/cld-sample.jpg"
function App() {
  
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <>
      <div>
        <AlbumComponent image={image} name={'Rozes'} artist={'solista'} album={'Under the Grave 2'} year={'2016'} like={liked} genre={'dance'} handleLike ={handleLike}/>
      </div>
      
    </>
  )
}

export default App
