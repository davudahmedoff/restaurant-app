import React from 'react';
import { Link } from 'react-router-dom';


const Rezervationbody = () => {
    const pageLink="https://www.opentable.com/restref/client/?rid=1251157&restref=1251157&datetime=2023-04-05T16%3A30&covers=1&rtype=ism&searchdatetime=2023-04-05T16%3A30&partysize=1&lang=en&corrid=0b633e9d-ca62-448e-97cc-fd965bf91f89"
  return (
    <div className='rezer-page'>
         <Link to="/"><button className='close'><i class="fa-sharp fa-solid fa-xmark"></i></button></Link>
         <div className='rezerv-div'>
                 <h2>Rezervasiya</h2>

                 <div className='rezerv-form'>
                   
                    <label>Addreslerimiz
                    <select name='adress' id='rezerv-select'  >
                        <option hidden>Addreslərimiz</option>
                         <option>Nərimanov </option>
                         <option>Nizami</option>
                    </select>
                    </label>

                    <label>Adam sayı
                    <select name='adress' id='rezerv-select'  >
                        <option hidden>Adam sayı</option>
                         <option> 1 nəfər</option>
                         <option> 2 nəfər</option>
                         <option> 3 nəfər</option>
                         <option> 4 nəfər</option>
                         <option> 5 nəfər</option>
                         <option> 6 nəfər</option>
                         <option> 7 nəfər</option>
                         <option> 8+ nəfər</option>
                    </select>
                    </label>
                <label>Tarix
                  <input  type="date" placeholder='Tarix'/>
                </label>

                <label>Saat
                    <select  name='adress' id='rezerv-select'  >
                        <option hidden>Saat</option>
                         <option> 11:00PM</option>
                         <option>12:00PM</option>
                         <option>01:00PM</option>
                         <option>02:00PM</option>
                         <option>03:00PM</option>
                         <option>04:00PM</option>
                         <option>05:00PM</option>
                         <option>06:00PM</option>
                    </select>
                         </label>   
                         <Link to={pageLink}><button style={{marginLeft:"20rem"}} className='btn-rezervation' >Masa Axtar</button></Link>  
                 </div>
         </div>
    </div>
  )
}

export default Rezervationbody
