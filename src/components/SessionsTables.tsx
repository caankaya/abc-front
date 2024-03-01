import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ISequence } from "../@types/sequence";
import DeleteSessionModal from "./sub-components-session-modal/DeleteSessionModal";
import { openModal } from "../../commons/functions";
import UpdateSessionModal from "./sub-components-session-modal/UpdateSessionModal";
import { useAppDispatch, useAppSelector } from "../../commons/redux";
import { getOneSession } from "../../redux/reducers/sequences";
import { openUpdateModal } from "../../redux/reducers/session";

export default function SessionsTables({
  sequence,
}: {
  sequence: ISequence[];
}) {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.session.updateModal);
  const sessionAlert = useAppSelector((state) => state.sequence.sessionAlert);
  return (
    sequence[0].sessions.length > 0 && (
      <div className="tablet:overflow-x-scroll">
        {sessionAlert && (
          <p className="bg-red-500 my-5 text-sm text-center w-1/4 m-auto text-white rounded-box h-10 flex items-center justify-center">
            La session existe déjà. Entrez un autre nom de session
          </p>
        )}
        <table className="table w-full">
          <colgroup>
            <col style={{ width: "3%" }} />
            <col style={{ width: "3%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "27%" }} />
            <col style={{ width: "7%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "10%" }} />
          </colgroup>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Scénario</th>
              <th>Session</th>
              <th>Activités</th>
              <th>Remarques</th>
              <th>Durée / minutes</th>
              <th>Présentiel / Distanciel</th>
              <th>Individuel / Groupe</th>
              <th>Matériel</th>
            </tr>
          </thead>
          <tbody>
            {sequence.length !== 0 &&
              sequence[0].sessions.map((session, index) => (
                <tr key={index}>
                  <th>
                    <button
                      className="btn bg-transparent border-none"
                      onClick={() => {
                        sessionStorage.setItem(
                          "sessionId",
                          session.session_id.toString()
                        );
                        openModal("delete-session");
                      }}
                    >
                      <FontAwesomeIcon icon={faTrashCan} size="lg" />
                    </button>
                  </th>
                  <td>
                    <button
                      className="btn bg-transparent border-none"
                      onClick={() => {
                        sessionStorage.setItem(
                          "sessionId",
                          session.session_id.toString()
                        );
                        dispatch(getOneSession());
                        setTimeout(() => {
                          dispatch(openUpdateModal(true));
                        }, 100);
                      }}
                    >
                      <FontAwesomeIcon icon={faPencil} beat size="lg" />
                    </button>
                  </td>
                  <td
                    style={{
                      background: session.color,
                      borderRadius: "1rem",
                    }}
                  >
                    <p className="text-white font-bold">{session.card_name}</p>
                  </td>
                  <td>
                    <p>{session.session_name}</p>
                  </td>
                  <td>{session.tool_name}</td>
                  <td className="overflow-auto">
                    <p>{session.comments}</p>
                  </td>
                  <td>
                    <p>{session.time}</p>
                  </td>
                  <td>
                    <p>
                      {session.is_face_to_face === true
                        ? "Présentiel"
                        : "Distanciel"}
                    </p>
                  </td>
                  <td>
                    <p>
                      {session.is_group_work === true ? "Groupe" : "Individuel"}
                    </p>
                  </td>
                  <td>
                    <p>{session.equipment}</p>
                  </td>
                  <td>
                    <DeleteSessionModal />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <UpdateSessionModal isOpen={isOpen} />
      </div>
    )
  );
}
