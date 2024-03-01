import { useAppDispatch } from "../../commons/redux";
import { closeModal } from "../../commons/functions";
import { deleteSession } from "../../redux/reducers/sequences";

function DeleteSessionModal() {
  const dispatch = useAppDispatch();

  return (
    <dialog id="delete-session" className="modal w-[60%] m-auto">
      <div className="modal-box">
        <h3 className="font-bold text-sm text-center error-line mb-5 tablet:text-xs">
          Vous êtes sur le point de supprimer la session !
        </h3>
        <section className="button-container flex justify-evenly">
          <button
            className="btn btn-error btn-sm text-white tablet:text-xs"
            onClick={() => {
              dispatch(
                deleteSession(Number(sessionStorage.getItem("sessionId")))
              );
              sessionStorage.removeItem("sessionId");

              closeModal("delete-session");
            }}
          >
            Supprimer
          </button>
          <button
            className="btn btn-success btn-sm text-white w-[5.5rem] tablet:text-xs"
            onClick={() => {
              closeModal("delete-session");
            }}
          >
            Annuler
          </button>
        </section>
      </div>
    </dialog>
  );
}

export default DeleteSessionModal;
