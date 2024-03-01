import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../commons/redux";
import { closeModal } from "../../commons/functions";
import { FormEvent, useEffect, useRef, useState } from "react";
import { clearAlert, login } from "../../redux/reducers/user";

export default function App() {
  const user = useAppSelector((state) => state.user.logged);
  const alert = useAppSelector((state) => state.user.connectionAlert);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    dispatch(login(formData));
    closeModal("my_modal_5");
    formRef.current?.reset();
  };

  useEffect(() => {
    if (user) {
      navigate("/scenarios");
      dispatch(clearAlert());
    }
  }, [user]);

  return (
    <main className="app flex justify-center tablet:mb-[30rem]">
      <div className="grid grid-cols-2 gap-5 shadow p-5 rounded-lg w-1/2 mt-5 absolute top-1/3 tablet:top-16 tablet:w-[80%] border-[1px]">
        <div className="left-container p-5 border-r-2">
          <p className="text-sm text-justify tablet:text-xs">
            Vous devez préparer un nouveau cours et vous aimeriez innover en
            intégrant des activités d’apprentissage, mais vous ne savez pas quoi
            et comment faire? Ou alors vous êtes responsable d’une formation,
            d’un module dont vous aimeriez repenser l’organisation avec les
            enseignants, mais vous ne savez pas comment vous y prendre ? Alors
            l’application en ligne « ABC Learning » peuvent vous aider.
          </p>
        </div>
        <div className="right-container">
          <form
            method="post"
            ref={formRef}
            onSubmit={(event) => {
              handleSubmit(event);
            }}
          >
            <div className="">
              <label
                className="block mb-5 text-sm font-medium tablet:text-xs"
                htmlFor="username"
              >
                Votre identifiant
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 tablet:text-xs"
                  placeholder="pseudo"
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </label>
            </div>
            <div className="mb-6">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 tablet:text-xs"
                htmlFor="password"
              >
                Votre mot de passe
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 tablet:text-xs"
                  placeholder="mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
              {alert && (
                <p className="text-red-500 text-sm">
                  L'identifiant ou le mot de passe est incorrect
                </p>
              )}
            </div>
            <button className="btn btn-sm text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full m-auto block sm:w-auto text-center">
              Connexion
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
