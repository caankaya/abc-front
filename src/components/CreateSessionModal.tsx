import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../commons/redux";
import { useRef, useState } from "react";
import { ICard } from "../@types/card";
import { closeModal } from "../../commons/functions";
import { createSession } from "../../redux/reducers/session";

export default function CreateSessionModal({ card }: { card: ICard }) {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [isPresentiel, setIsPresentiel] = useState(true);
  const [isGroupe, setIsGroupe] = useState(true);
  const formRef = useRef<HTMLFormElement>(null);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    formData.append("is_face_to_face", isPresentiel.toString());
    formData.append("is_group_work", isGroupe.toString());
    formData.append("card_id", card.get_activities.card_id.toString());
    formData.append("tool_id", sessionStorage.getItem("tool_id") as string);
    formData.append("sequence_id", id?.toString() as string);
    dispatch(createSession(formData));
    formRef.current?.reset();
    sessionStorage.removeItem("tool_id");
    closeModal("my_modal_9");
  };

  return (
    <dialog id="my_modal_9" className="modal">
      <div
        className="modal-box w-2/6 max-w-5xl tablet:w-4/6"
        style={{ backgroundColor: card.get_activities.color }}
      >
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white"
            onClick={() => {
              sessionStorage.removeItem("tool_id");
              closeModal("my_modal_9");
            }}
          >
            ✕
          </button>
        </form>
        <form method="post" onSubmit={handleFormSubmit} ref={formRef}>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-white tablet:text-xs"
          >
            Nom de la session
            <input
              id="name"
              name="name"
              placeholder="Ecrivez le nom de la session"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-2/3 p-2.5 tablet:text-xs"
              autoComplete="off"
              required
            />
          </label>
          <label
            htmlFor="time"
            className="block mb-2 text-sm font-medium text-white tablet:text-xs"
          >
            Durée en minutes
            <input
              type="number"
              id="time"
              name="time"
              defaultValue={0}
              min={0}
              max={100}
              placeholder="Minutes"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-2/3 p-2.5 tablet:text-xs"
              autoComplete="off"
            />
          </label>
          <label className="block mb-2 text-sm font-medium text-white tablet:text-xs">
            Présentiel / Distanciel
            <select
              id="presentiel"
              name="is_face_to_face"
              className="bg-gray-50 border border-gray-300 focus:bg-none text-gray-900 text-sm rounded-lg block w-2/3 p-2.5 tablet:text-xs"
              onChange={(e) => {
                if (e.target.value === "Présentiel") {
                  setIsPresentiel(true);
                } else {
                  setIsPresentiel(false);
                }
              }}
              autoComplete="off"
            >
              <option value="Présentiel">Présentiel</option>
              <option value="Distanciel">Distanciel</option>
            </select>
          </label>
          <label className="block mb-2 text-sm font-medium text-white tablet:text-xs">
            Individuel / Groupe
            <select
              id="groupe"
              name="is_group_work"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 tablet:text-xs"
              onChange={(e) => {
                if (e.target.value === "Groupe") {
                  setIsGroupe(true);
                } else {
                  setIsGroupe(false);
                }
              }}
              autoComplete="off"
            >
              <option value="Groupe">Groupe</option>
              <option value="Individuel">Individuel</option>
            </select>
          </label>
          <label
            htmlFor="comments"
            className="block mb-2 text-sm font-medium text-white tablet:text-xs"
          >
            Remarques
            <textarea
              id="comments"
              name="comments"
              placeholder="Ecrivez vos commentaire"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 tablet:text-xs overflow-hidden"
              autoComplete="off"
            />
          </label>
          <label
            htmlFor="equipment"
            className="block mb-2 text-sm font-medium text-white tablet:text-xs"
          >
            Matériel
            <div className="flex flex-row items-end">
              <div className="flex-grow">
                <textarea
                  id="equipment"
                  name="equipment"
                  placeholder="Ecrivez vos matériels"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 tablet:text-xs overflow-hidden"
                  autoComplete="off"
                />
              </div>
              <button className="btn btn-sm ml-5">Valider</button>
            </div>
          </label>
        </form>
      </div>
    </dialog>
  );
}
