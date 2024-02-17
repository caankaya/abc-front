import { faBookOpen, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { togglerDropdown } from "../../redux/reducers/header";

export default function Header() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.header.buttonBurger);

  return (
    <header className="header">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="text-xl font-bold">LOGO</a>
          <a className="text-sm ml-5">Création de scénario d'apprentissage</a>
        </div>
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="https://moodletoolguide.net/fr/" target="_blank">
              Guide des outils Moodle <FontAwesomeIcon icon={faGraduationCap} />
            </a>
          </li>
          <li>
            <a
              href="https://h5p.org/content-types-and-applications"
              target="_blank"
            >
              Exemples H5P <FontAwesomeIcon icon={faBookOpen} />
            </a>
          </li>
        </ul>
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
        <div
          tabIndex={0}
          className={`p-2 bg-base-100 rounded-box shadow w-52 absolute right-0 mr-5 mt-28 ${
            isOpen ? "visible" : "hidden"
          }`}
        >
          <a className="btn btn-sm btn-ghost btn-block">Se connecter</a>
        </div>
      </div>
    </header>
  );
}
