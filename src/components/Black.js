import React from 'react';
import { Link } from 'react-router-dom';


const Black = () => {
  return (
    <div className='black' >
      <p>
      İtalyancadan "kolleksiya" mənasını verən Colletta, sadəcə olaraq, canlı yemək təcrübələrinin toplusudur. Colletta qonaqpərvərliyi və xidməti ilə ən yaxşı İtalyan Amerikan yeməklərini qeyd edir. Mövsümi dəyişikliklər evdə gündəlik hazırlanan cızıqdan hazırlanmış makaron, pendirlər, antipastilər, pizzalar və s. menyusuna rəhbərlik edir. İtalyan yemək ənənələrinə sadiq qalaraq, Colletta, həmçinin tam alakart menyu ilə yanaşı, hər gecə təklif olunan ailə tərzi təcrübəsi üçün hazırlanmış “Süfrə üçün” yemək seçimini təklif edir.
      </p>

      <Link to="/about" ><button className='information'>Ətraflı</button></Link>
    </div>
  )
}

export default Black
