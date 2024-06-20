import React from "react";
import { Link } from 'react-router-dom';
import photo1 from "./Images/cheers1.jpg";
import photo2 from "./Images/macaron.jpg";
import photo3 from "./Images/pizza.jpg";

const Body = () => {
  const link_1="https://media-cdn.getbento.com/accounts/4e84fa105d04379104b8a7f98f1f966d/media/sFZNf18TkC8dcSs5n4Fu_Colletta%20Cary_Eater%20Carolinas_Jan2023.AM.png";
  const link_2="https://www.wral.com/italian-restaurant-colletta-to-open-in-fenton-in-september/20432426/";
  return (
    <section>
    <div className="body">
      <div
        className="img"
        style={{
          backgroundImage: `url(${photo1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="table">
        <h2>Xoş günlərinizi bizimlə qeyd edin</h2>
        <p>
          Böyük və ya kiçik bütün anları qeyd etməyi və ya işgüzar şam yeməyini
          bayram ziyafətinə çevirməyi tövsiyə edirik. Colletta-da toplaşmaq üçün
          bəhanəyə ehtiyacınız yoxdur.
        </p>
        <Link to="/contact"><button className="btn-branch">Bizimlə əlaqə</button></Link>
      </div>
    </div>

    <div className="body">
       <div className="table-2">
        <h2>
          Menyu
        </h2>
        <p>Sıfırdan hazırlanmış mətbəximizdən möhtəşəm dadlar sizinlə</p>
       <Link to="/menu"> <button className="btn-branch">Menyu</button></Link>
      </div> 
       <div className="img-2" style={{
          backgroundImage: `url(${photo2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}>

      </div> 
    </div>
    <div className="press">
       <div className="press-header">
        <h1>Restoranımız Mətbuatda</h1>
       </div>
       <div className="press-buttons">
        <Link to={link_1}><button className="press-link">Eater carolinas</button></Link>
        <Link to={link_2}><button className="press-link">Cary Magazine</button></Link>
       </div>
    </div>
    <div className="rezerv">
        <div className="rezerv-img" style={{backgroundImage:`url(${photo3})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
        }}>
          <div className="rezerv-content">
            <h3>Ləzzətlə görüşün</h3>
         <Link to="/rezervation"> <button className="btn-rezervation">Rezervasiya</button></Link>
          </div>
          </div>  
    </div>
    </section>
  );
};

export default Body;
