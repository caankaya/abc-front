import { Link } from "react-router-dom";
import SequencesTables from "../components/SequencesTables";
import { useAppDispatch, useAppSelector } from "../../commons/redux";
import { useEffect } from "react";
import { getAllSequences } from "../../redux/reducers/sequences";

export default function Sequences() {
  const dispatch = useAppDispatch();
  const sequences = useAppSelector((state) => state.sequence.sequences);
  console.log("sequences :", sequences);

  useEffect(() => {
    dispatch(getAllSequences());
  }, []);

  return (
    <div className="flex flex-col items-center">
      {!sequences?.length && (
        <div className="flex flex-col gap-y-5 shadow items-center p-5 rounded-lg w-1/3 m-auto mt-5 max-sm:overflow-y-auto absolute top-1/3">
          <p className="text-sm">il n'y a pas de scénario enregistré</p>
          <Link to={"/"} className="btn btn-sm w-52">
            Revenir à l'accueil
          </Link>
        </div>
      )}
      {sequences?.length > 0 && <SequencesTables sequences={sequences} />}
    </div>
  );
}
