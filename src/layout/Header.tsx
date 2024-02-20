import { faBookOpen, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "../../commons/redux";
import { togglerDropdown } from "../../redux/reducers/header";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { logout } from "../../redux/reducers/user";
import { openModal } from "../../commons/functions";

export default function Header() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.logged);
  const isOpen = useAppSelector((state) => state.header.buttonBurger);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header ">
      <div className="navbar max-md:flex max-md:justify-around bg-base-300 items-center">
        <div className="flex-1">
          <div className="w-26">
            <Link to={"/"}>
              <img src="/src/assets/logo.png" alt="" width={100} height={50} />
            </Link>
          </div>
          <a
            className="btn btn-sm ml-5 tablet:btn-xs bg-[#d8dee9] border-none shadow-none font-normal hover:bg-[#c7ccd7]"
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
        {/* Boutton burger */}
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
