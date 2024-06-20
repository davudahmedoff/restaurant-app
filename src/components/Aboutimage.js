import React from "react";
import img1 from "./Images/interyer.jpg";

const Aboutimage = () => {
  return (
    <>
    <div className="page-about">
      <div
        className="about-img"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="text-h">
        <h1>Haqqımızda</h1>
      </div>
    </div>
     <div className="text-container">
        <div className="text">
     <p>
     Colletta (italyan dilində "kolleksiya" deməkdir) canlı yemək təcrübələrinin toplusudur. Colletta qonaqpərvərliyi və xidməti ilə ən yaxşı İtalyan Amerikan yeməklərini qeyd edir. Mövsümi dəyişikliklər evdə hazırlanmış makaron, antipasti, pizza və s. menyusuna rəhbərlik edir. İtalyan yemək ənənələrinə sadiq qalaraq, Colletta, həmçinin hər gecə təklif olunan ailə tərzi təcrübəsi üçün aşpazın hazırladığı “Masa üçün” seçimini təklif edir.
     </p>
     </div>
   </div>
   </>
  );
};

export default Aboutimage;
