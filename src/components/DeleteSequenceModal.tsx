import React from "react";
import { useAppDispatch } from "../../commons/redux";
import { deleteSequence } from "../../redux/reducers/sequences";
import { closeModal } from "../../commons/functions";

function DeleteSequenceModal({ sequenceId }: { sequenceId: number }) {
  const dispatch = useAppDispatch();

  return (
    <React.Fragment>
      <dialog id="my_modal_7" className="modal w-[60%] m-auto">
        <div className="modal-box">
          <h3 className="font-bold text-sm text-center error-line mb-5 tablet:text-xs">
            Vous êtes sur le point de supprimer le scénario {sequenceId} !
          </h3>
          <section className="button-container flex justify-evenly">
            <button
              className="btn btn-error btn-sm text-white tablet:text-xs"
              onClick={() => {
                dispatch(deleteSequence(sequenceId));
                closeModal("my_modal_7");
              }}
            >
              Supprimer
            </button>
            <button
              className="btn btn-success btn-sm text-white w-[5.5rem] tablet:text-xs"
              onClick={() => {
                closeModal("my_modal_7");
              }}
            >
              Annuler
            </button>
          </section>
        </div>
      </dialog>
    </React.Fragment>
  );
}

export default DeleteSequenceModal;
