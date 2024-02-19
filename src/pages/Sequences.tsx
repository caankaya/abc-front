import { Link } from "react-router-dom";
import SequencesTables from "../components/SequencesTables";
import { useAppDispatch, useAppSelector } from "../../commons/redux";
import { useEffect } from "react";
import { getAllSequences } from "../../redux/reducers/sequences";

export default function Sequences() {
  const dispatch = useAppDispatch();
  const sequences = useAppSelector((state) => state.sequence.sequences);

  useEffect(() => {
    dispatch(getAllSequences());
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-around mt-5">
      {!sequences && (
        <div>
          <p className="text-sm">il n'y a pas de scénario enregistré</p>
          <Link to={"/"}>Revenir à l'accueil</Link>
        </div>
      )}
      {sequences && <SequencesTables sequences={sequences} />}
    </div>
  );
}
