import { FormEvent, useState } from "react";
import { useAppDispatch } from "../../commons/redux";
import { login } from "../../redux/reducers/user";
import { closeModal } from "../../commons/functions";

export default function LoginModal() {
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    dispatch(login(formData));
    setUsername("");
    setPassword("");
    closeModal("my_modal_5");
  };

  return (
    <dialog
      id="my_modal_5"
      className="modal modal-bottom tablet:modal-middle tablet:w-1/2 tablet:m-auto sm:modal-middle"
    >
      <div className="modal-box bg-base-100">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => {
              setUsername("");
              setPassword("");
            }}
          >
            ✕
          </button>
        </form>
        <form
          method="post"
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 tablet:text-xs"
              htmlFor="username"
            >
              Votre identifiant
              <input
                type="text"
                id="username"
                name="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 tablet:text-xs"
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
          </div>
          <button className="btn btn-sm text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full m-auto block sm:w-auto text-center">
            Connexion
          </button>
        </form>
      </div>
    </dialog>
  );
}
