import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const link_press="https://www.bizjournals.com/triangle/news/2022/06/07/cary-fenton-restaurants-colletta-steve-palmer.html";
  const link_caryer="https://www.theindigoroad.com/careers/";
  return (
    <div className="footer">
      <ul className="footer__ul">
        <NavLink to={link_press}>
          <li>Mətbuat</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Bizimlə əlaqə</li>
        </NavLink>
        <NavLink to={link_caryer}>
          <li>Karyera</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Footer;
