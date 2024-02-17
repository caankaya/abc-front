export default function LoginModal() {
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box bg-white">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <form method="post">
          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
              htmlFor="username"
            >
              Votre identifiant
              <input
                type="text"
                id="username"
                name="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="pseudo"
                autoComplete="username"
                required
              />
            </label>
          </div>
          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
              htmlFor="password"
            >
              Votre mot de passe
              <input
                type="password"
                id="password"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="mot de passe"
                required
              />
            </label>
          </div>
          <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full m-auto block sm:w-auto px-5 py-2.5 text-center">
            Connexion
          </button>
        </form>
      </div>
    </dialog>
  );
}
