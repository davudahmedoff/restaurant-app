import React from 'react';
import image1 from "./Images/spaggeti.jpg";
import image2 from "./Images/lunch.jpeg";

const AboutBody = () => {
  return (
    <section>
    <div className="body">
      <div
        className="img"
        style={{
          backgroundImage: `url(${image1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="table-body">
        <h2>Colletta</h2>
        <p>
        Mövsümi dəyişikliklər, görkəmli inqrediyentlər və sıfırdan hazırlanmış fəlsəfə bələdçisi Colletta-nın evdə hazırlanmış fokaç və makaron, antipasti, sifarişlə hazırlanmış odunla bişmiş pizzalar və piatti menyusu. Aşpaz nahar və desert menyularını yaxşı balanslaşdırılmış şərab və içki proqramı ilə birləşdirdi.

Cary, NC Fenton-da yerləşən bu təsadüfi, lakin cilalanmış ailə üslublu İtalyan restoranı 120 qapalı yemək üçün oturacaq, açıq havada yarı örtülü veranda 60 oturacaq və 12 yerlik bara malikdir.
        </p>
       
      </div>
    </div>

    <div className="body">
       <div className="table-body">
        <h2>
          Colletta
        </h2>
        <p>Restoranın açıq konsepsiyalı yemək otağı ailə evindəki ocağı xatırladan mətbəxin odun sobasının ətrafında lövbər salıb. Yenilənmiş anbar ağacı və zərif keramika plitələri ilə vurğulanan müasir məkan qonaqları qonaqpərvər bir atmosferdə əhatə edir - istər əllə hazırlanmış kokteyl, istərsə də bir stəkan şərab üçün bara baş çəkmək, uşaqlarla pizza götürmək və ya yemək üçün əyləşməkdən asılı olmayaraq. dostlar və həmkarları ilə ailə tərzində şam yeməyi.</p>
      </div> 
       <div className="img-2" style={{
          backgroundImage: `url(${image2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}>

      </div> 
    </div>

    </section>
  )
}

export default AboutBody
