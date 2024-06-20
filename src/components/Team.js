import React,{useState} from 'react'
import { photos } from '../data';


const Team = () => {
    const [data ,setData]=useState(photos);
  return (
    <div className='team-div'>
          <div className='team-text'>
            <h1>Komandamız</h1>
          </div>

     <div className='team-content'>
          {data.map((a)=>(
            <div className='content-flex' >
            <div  className='content-photo' key={a.id}>
                <img src={a.photoSrc}></img>
            </div>
            <div className='team-info'>
                <h6>{a.name}</h6>
                <p>{a.position}</p>
            </div>
            </div>
          ))}
     </div>
     </div>

// style={{backgroundImage:`url(${a.photoSrc})`,
// backgroundRepeat: "no-repeat",
// backgroundSize: "cover",
// }}
  )
}

export default Team;
