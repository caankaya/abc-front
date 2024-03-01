import { FormEvent, useState } from "react";
import { useAppDispatch } from "../../commons/redux";
import { closeModal } from "../../commons/functions";
import {
  getAllSequences,
  updateSequence,
} from "../../redux/reducers/sequences";

export default function UpdateSequenceModal() {
  const dispatch = useAppDispatch();
  const [sequenceName, setSequenceName] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    dispatch(updateSequence(formData)).then(() => dispatch(getAllSequences()));
    closeModal("update-sequence");
    setSequenceName("");
  };

  return (
    <dialog id="update-sequence" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box bg-base-100">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <form
          method="post"
          onSubmit={(event) => {
            handleSubmit(event);
            sessionStorage.removeItem("sequenceId");
          }}
        >
          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-medium tablet:text-xs"
              htmlFor="name"
            >
              Modifiez le nom du scénario
              <input
                type="text"
                id="name"
                name="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 tablet:text-xs"
                placeholder="Entrez le nouveau nom du scénario"
                autoComplete="name"
                value={sequenceName}
                onChange={(e) => setSequenceName(e.target.value)}
                required
              />
            </label>
          </div>
          <button className="btn btn-sm text-white btn-success m-auto block">
            Valider
          </button>
        </form>
      </div>
    </dialog>
  );
}
