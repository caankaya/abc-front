import { Link } from "react-router-dom";
import { useAppSelector } from "../../commons/redux";
import { openModal } from "../../commons/functions";

export default function App() {
  const user = useAppSelector((state) => state.user.logged);

  return (
    <main className="app flex flex-col items-center tablet:mb-[30rem]">
      <div className="flex flex-col gap-y-5 shadow p-5 rounded-lg w-1/2 m-auto mt-5 max-sm:overflow-y-auto absolute top-1/3 tablet:top-16 tablet:w-[80%]">
        <p className="text-sm text-justify tablet:text-xs">
          Vous devez préparer un nouveau cours et vous aimeriez innover en
          intégrant des activités d’apprentissage, mais vous ne savez pas quoi
          et comment faire? Ou alors vous êtes responsable d’une formation, d’un
          module dont vous aimeriez repenser l’organisation avec les
          enseignants, mais vous ne savez pas comment vous y prendre ? Alors
          l’application en ligne « ABC Learning » peuvent vous aider.
        </p>
        <div className="flex justify-around gap-3 mobile:flex-col mobile:items-center">
          {user ? (
            <>
              <button
                className="btn btn-sm tablet:btn-xs"
                onClick={() => {
                  openModal("my_modal_6");
                }}
              >
                Créer un nouveau scénario
              </button>
              <Link to={"/scenarios"} className="btn btn-sm tablet:btn-xs">
                Voir les scénarios enregistrés
              </Link>
            </>
          ) : (
            <>
              <button
                className="btn btn-sm tablet:btn-xs"
                onClick={() => {
                  openModal("my_modal_5");
                }}
              >
                Se connecter
              </button>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
