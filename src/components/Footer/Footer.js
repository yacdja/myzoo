import React from "react";
import facebook from "../../assets/images/footer/fb.png";
import youtube from "../../assets/images/footer/youtube.png";
import twitter from "../../assets/images/footer/twitter.png";
import { NavLink } from "react-router-dom";
import classes from "./Footer.module.css";

const footer = (props) => {
  return (
    <>
      <footer className="bg-primary ">
        <div className="text-white text-center">my zoo -tout droits -</div>
        <div className="row no-gutters align-items-center text-center pt-2">
          <div className="col-3">
            <a
              href="https://www.facebook.com/?locale=fr_CA"
              className="d-block"
              target="_blank"
            >
              <img src={facebook} alt="Facebook" className="imgFB" />
            </a>
          </div>

          <div className="col-3">
            <a href="https://twitter.com/" className="d-block" target="_blank">
              <img src={twitter} alt="Twitter" className="imgTwitter" />
            </a>
          </div>
          <div className="col-3">
            <a
              href="https://www.youtube.com/"
              className="d-block"
              target="_blank"
            >
              <img src={youtube} alt="Youtube" className="imgYoutube" />
            </a>
          </div>
          <div className="col-3">
            <NavLink
              to="/mentionLegales"
              className={["nav-link", "p-0", "m-0", classes.p_footerLink].join(
                " "
              )}
            >
              Montion Légales
            </NavLink>
            <a
              href="mailto:contact@myzoo.com"
              className={["nav-link", "p-0", "m-0", classes.p_footerLink].join(
                " "
              )}
            >
              Contact@myzoo.com
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
