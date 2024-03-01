import {
  faArrowUpRightFromSquare,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import moment from "moment";
import { useAppDispatch } from "../../commons/redux";
import {
  getAllSequences,
  getOneSequence,
} from "../../redux/reducers/sequences";
import { ISequences } from "../@types/sequences";
import { useEffect } from "react";
import DeleteSequenceModal from "./sub-components-sequence-modal/DeleteSequenceModal";
import { openModal } from "../../commons/functions";
import UpdateSequenceModal from "./sub-components-sequence-modal/UpdateSequenceModal";

export default function SequencesTables({
  sequences,
}: {
  sequences: ISequences[];
}) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllSequences());
  }, [dispatch]);

  return (
    <div className="SequencesTables w-full">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* body */}
          <tbody className="tablet:text-xs">
            {sequences &&
              sequences.map((sequence) => (
                <tr key={sequence.id}>
                  <th></th>
                  <th></th>
                  <th>
                    <button
                      onClick={() => {
                        openModal("delete-sequence");
                        sessionStorage.setItem(
                          "sequenceId",
                          sequence.id.toString()
                        );
                      }}
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                  </th>
                  <th>
                    <button
                      onClick={() => {
                        openModal("update-sequence");
                        sessionStorage.setItem(
                          "sequenceId",
                          sequence.id.toString()
                        );
                      }}
                    >
                      <FontAwesomeIcon icon={faPen} beat />
                    </button>
                  </th>
                  <td>{sequence.id}</td>
                  <td>{sequence.name}</td>
                  <td>{moment(sequence.created_at).format("DD/MM/YYYY")}</td>
                  <td>
                    <Link
                      to={`/scenarios/${sequence.id}`}
                      onClick={() => {
                        sessionStorage.setItem(
                          "sequence_id",
                          sequence.id.toString()
                        );
                        dispatch(getOneSequence(sequence.id));
                      }}
                    >
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
        <DeleteSequenceModal />
        <UpdateSequenceModal />
      </div>
    </div>
  );
}
