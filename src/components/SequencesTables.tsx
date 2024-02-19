import {
  faArrowUpRightFromSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import moment from "moment";
import { ISequence } from "../@types/sequences";
import { useAppDispatch } from "../../commons/redux";
import { deleteOneSequence } from "../../redux/reducers/sequences";

export default function SequencesTables({
  sequences,
}: {
  sequences: ISequence[];
}) {
  const dispatch = useAppDispatch();

  return (
    <div className="SequencesTables">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>ID</th>
              <th>Nom du scénario</th>
              <th>Date de création</th>
            </tr>
          </thead>
          {/* body */}
          <tbody>
            {sequences &&
              sequences.map((sequence) => (
                <tr key={sequence.id}>
                  <th>
                    <button
                      onClick={() => {
                        dispatch(deleteOneSequence(sequence.id));
                      }}
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                  </th>
                  <td>{sequence.id}</td>
                  <td>{sequence.name}</td>
                  <td>
                    {moment(sequence.created_at).format("DD/MM/YYYY HH:mm")}
                  </td>
                  <td>
                    <Link to={`/scenarios/${sequence.id}`}>
                      Voir le scénario
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        style={{ marginLeft: "1rem" }}
                      />
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
