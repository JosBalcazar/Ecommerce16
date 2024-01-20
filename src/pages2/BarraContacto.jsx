import { NavLink } from "react-router-dom";

import phone from "/ico/phone1.svg";
import mail from "/ico/mail1.svg";
import facebook from "/ico/facebook2.svg";
import whatsapp from "/ico/whatsapp1.svg";
import twitter from "/ico/twitter.svg";

export const BarraContacto = () => {
  return (
    <>
      {/*  BARRA CONTACTO */}
      <div className="row cont-barra">
        <div className="col-sm-4"></div>
        <div className="col-sm-8 barra">
          <NavLink to="#">
            <img src={phone} alt="Telefono"></img>
          </NavLink>
          <NavLink to="#">
            <span>(51-1)444-4444</span>
          </NavLink>
          <NavLink to="#">
            <img src={mail} alt="Email"></img>
          </NavLink>
          <NavLink to="#">
            <span>ventas@empresa.com</span>
          </NavLink>
          <navLink to="#">
            <img src={facebook} alt="Facebook"></img>
          </navLink>
          <NavLink to="#">
            <img src={whatsapp} alt="WhatsApp"></img>
          </NavLink>
          <NavLink to="#">
            <img src={twitter} alt="Twitter"></img>
          </NavLink>
        </div>
      </div>
    </>
  );
};
