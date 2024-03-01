import { faBookOpen, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "../../commons/redux";
import { togglerDropdown } from "../../redux/reducers/header";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { logout } from "../../redux/reducers/user";
import { openModal } from "../../commons/functions";
import logo from "../assets/logo 2.png";

export default function Header() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.logged);
  const isOpen = useAppSelector((state) => state.header.buttonBurger);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "synthwave";
  });

  const toggleTheme = () => {
    const newTheme = theme === "synthwave" ? "nord" : "synthwave";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    document.querySelector("html")?.setAttribute("data-theme", theme);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);

  return (
    <header className="header">
      <div className="navbar max-md:flex max-md:justify-around bg-base-300 items-center">
        <div className="flex-1">
          <div className="w-26">
            <Link to={"/"}>
              <img src={logo} alt="logo" className="w-24" />
            </Link>
          </div>
          <a
            className="btn btn-sm btn-ghost ml-5 tablet:btn-xs border-none shadow-none font-normal"
            href="/"
          >
            Création de scénario d'apprentissage
          </a>
        </div>
        <ul
          className={`menu menu-horizontal px-1 ${
            windowWidth < 768 ? "hidden" : "visible"
          }`}
        >
          <li>
            <a
              href="https://moodletoolguide.net/fr/"
              target="_blank"
              className="tablet:text-xs"
            >
              Guide des outils Moodle <FontAwesomeIcon icon={faGraduationCap} />
            </a>
          </li>
          <li>
            <a
              href="https://h5p.org/content-types-and-applications"
              target="_blank"
              className="tablet:text-xs"
            >
              Exemples H5P <FontAwesomeIcon icon={faBookOpen} />
            </a>
          </li>
        </ul>
        {/* Bouton */}
        <label className="swap swap-rotate ml-6">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" onClick={toggleTheme} />

          {/* sun icon */}
          <svg
            className="swap-on fill-current w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off fill-current w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        {/* Boutton burger */}
        {user && (
          <button
            type="button"
            className="lg:focus:outline-none flex flex-col mb-2 ml-10"
            onClick={() => {
              dispatch(togglerDropdown(!isOpen));
            }}
          >
            <span
              className={`block h-[2px] w-5 bg-base-content rounded-full  transition-all duration-1000 transform ${
                isOpen ? "rotate-45 translate-y-2 mt-1" : "mt-2"
              }`}
            ></span>
            <span
              className={`block h-[2px] w-5 bg-base-content rounded-full mt-1 transition-all duration-1000 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-[2px] w-5 bg-base-content rounded-full  transition-all duration-1000 transform ${
                isOpen ? "-rotate-45 -translate-y-2 mt-2" : "mt-1"
              }`}
            ></span>
          </button>
        )}
        {/* Menu déroulant */}
        <div
          style={{ zIndex: 999 }}
          className={`p-2 bg-base-100 rounded-box shadow w-52 absolute top-16 right-5 flex-col tablet:w-40 ${
            isOpen ? "visible" : "hidden"
          }`}
        >
          <ul>
            {
              <>
                {user ? (
                  <li>
                    <a
                      className="btn btn-sm btn-ghost w-[180px] tablet:btn-xs"
                      onClick={() => {
                        dispatch(togglerDropdown(false));
                        dispatch(logout());
                        navigate("/");
                      }}
                    >
                      Déconnexion
                    </a>
                  </li>
                ) : (
                  <li>
                    <a
                      className="btn btn-sm btn-ghost w-[180px] tablet:btn-xs"
                      onClick={() => {
                        dispatch(togglerDropdown(false));
                        openModal("my_modal_5");
                      }}
                    >
                      Se connecter
                    </a>
                  </li>
                )}
              </>
            }

            <li className={`${windowWidth < 768 ? "visible" : "hidden"}`}>
              <a
                className="btn btn-sm btn-ghost btn-block tablet:btn-xs"
                href="https://moodletoolguide.net/fr/"
                target="_blank"
              >
                Guide des outils Moodle
              </a>
            </li>
            <li className={`${windowWidth < 768 ? "visible" : "hidden"}`}>
              <a
                className="btn btn-sm btn-ghost btn-block tablet:btn-xs"
                href="https://h5p.org/content-types-and-applications"
                target="_blank"
              >
                Exemples H5P
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
