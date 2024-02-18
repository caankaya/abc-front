import {
  faArrowUpRightFromSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function SequencesTables() {
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
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <button>
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </th>
              <td>1</td>
              <td>Cy Ganderton</td>
              <td>01/01/2024 19h21</td>
              <td>
                <Link to={"/session/1"}>
                  Voir le scénario
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    style={{ marginLeft: "1rem" }}
                  />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
