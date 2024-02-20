import React from "react";
import { useAppDispatch } from "../../commons/redux";
import { deleteSequence } from "../../redux/reducers/sequences";
import { closeModal } from "../../commons/functions";

function DeleteSequenceModal({ sequenceId }: { sequenceId: number }) {
  const dispatch = useAppDispatch();

  return (
    <React.Fragment>
      <dialog id="my_modal_7" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-sm text-center error-line mb-5">
            Vous êtes sur le point de supprimer le scénario !
          </h3>
          <section className="button-container flex justify-evenly">
            <button
              className="btn btn-error btn-sm text-white"
              onClick={() => {
                dispatch(deleteSequence(sequenceId));
                closeModal("my_modal_7");
              }}
            >
              Supprimer
            </button>
            <button
              className="btn btn-success btn-sm text-white w-24"
              onClick={() => {
                closeModal("my_modal_7");
              }}
            >
              Annuler
            </button>
          </section>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button
            onClick={() => {
              closeModal("my_modal_7");
            }}
          >
            ✕
          </button>
        </form>
      </dialog>
    </React.Fragment>
  );
}

export default DeleteSequenceModal;
