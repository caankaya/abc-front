import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ISequence } from "../@types/sequence";

export default function SessionsTables({
  sequence,
}: {
  sequence: ISequence[];
}) {
  return (
    <table className="table w-full overflow-auto">
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
        {sequence[0].sessions.map((session, index) => (
          <tr key={index}>
            <th>
              <button
                className="btn bg-transparent border-none"
                onClick={() => {
                  // handleBlurModalClick();
                  // dispatch(openDeleteSessionModal(isDeleteSessionModalOpen));
                }}
              >
                <FontAwesomeIcon icon={faTrashCan} size="lg" />
              </button>
            </th>
            <td>
              <button
                className="btn bg-transparent border-none"
                onClick={() => {}}
              >
                <FontAwesomeIcon
                  icon={faPencil}
                  beat
                  size="lg"
                  style={{ color: "#000000" }}
                />
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
                {session.is_face_to_face === true ? "Présentiel" : "Distanciel"}
              </p>
            </td>
            <td>
              <p>{session.is_group_work === true ? "Groupe" : "Individuel"}</p>
            </td>
            <td>
              <p>{session.equipment}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
