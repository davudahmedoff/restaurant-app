import React from 'react';
import videoBg from "./videos/vid2.mp4";

const Background = () => {
  return (
    <div className='video'>
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted></video>
      <div className="content">
        <h1>Hər zaman xidmətinizdə</h1>
      </div>
    </div>
  )
}

export default Background
