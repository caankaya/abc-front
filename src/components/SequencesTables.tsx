import {
  faArrowUpRightFromSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import moment from "moment";
import { useAppDispatch } from "../../commons/redux";
import {
  deleteSequence,
  getAllSequences,
} from "../../redux/reducers/sequences";
import { ISequence } from "../@types/sequences";
import { useEffect } from "react";
import DeleteSequenceModal from "./DeleteSequenceModal";
import { openModal } from "../../commons/functions";

export default function SequencesTables({
  sequences,
}: {
  sequences: ISequence[];
}) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllSequences());
  }, [dispatch, getAllSequences()]);

  return (
    <div className="SequencesTables w-full">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          {/* <thead>
            <tr>
              <th></th>
              <th>ID</th>
              <th>Nom du scénario</th>
              <th>Date de création</th>
            </tr>
          </thead> */}
          {/* body */}
          <tbody className="tablet:text-xs">
            {sequences &&
              sequences.map((sequence) => (
                <>
                  <tr key={sequence.id}>
                    <th></th>
                    <th></th>
                    <th>
                      <button
                        onClick={() => {
                          openModal("my_modal_7");
                        }}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                    </th>
                    <td>{sequence.id}</td>
                    <td>{sequence.name}</td>
                    <td>{moment(sequence.created_at).format("DD/MM/YYYY")}</td>
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
                  <DeleteSequenceModal sequenceId={sequence.id} />
                </>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
