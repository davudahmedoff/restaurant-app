import React, { useState } from 'react';
import { galeries } from '../data';

const Galerybody = () => {
    const [items,setItems]=useState(galeries);
  return (
    <main>
      
        <div className='galery'>
            <div className='galery__header'>
                   <h1>
                    Colletta Əl işlərimiz
                   </h1>
            </div>
            /<div className='galery__items'> 

            {items.map((item)=>(
                <div  key={item.id} className='galery-item' style={{backgroundImage:`url(${item.src})`,
                 backgroundRepeat: "no-repeat",
                 backgroundSize: "cover",
                }} >
                <div className='galery-item-effect'>

                 </div>   
                </div>
          ))}
                  
            </div> 

        </div>
     
    </main>
  )
}

export default Galerybody
