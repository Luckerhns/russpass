import React, { FC, useContext, useState } from "react";
import logo from "../../styles/images/логотип.svg";
import flag from "../../styles/images/флаг россии.svg";
import projects from "../../styles/images/проекты Мостуризм.svg";
import heart from "../../styles/images/избранное.svg";
import profile from "../../styles/images/профиль.svg";


const Header: FC = () => {
  return (
    <header
      className="header d-flex align-items-center"
    >
      <div className="container">
        <div className="row">
          <div className="col-5 d-flex align-items-center gap-4">
            <a>
              <img src={logo} />
            </a>

            <a className="fill">
              <form action="" className="find__form">
                <input type="search" />
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fa fill"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    strokeWidth="2"
                  />
                </svg>
              </form>
            </a>
          </div>
          <div className="col d-flex justify-content-between gap-2">
            <div className="d-flex align-items-center gap-2">
              <img src={flag} />
              <a href="">РУС</a>
            </div>
            <div className="d-flex align-items-center gap-2">
              <img src={projects} />
              <a href="">Проекты Мостуризм</a>
            </div>
            <div className="d-flex align-items-center gap-2">
              <img src={heart} />
              <a href="">Избранное</a>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-2"><img
							src={profile}/><a href="#regModal" data-bs-toggle="modal"
							data-bs-target="#regModal">Профиль</a></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
