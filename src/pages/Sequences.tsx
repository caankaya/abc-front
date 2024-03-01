import SequencesTables from "../components/SequencesTables";
import { useAppDispatch, useAppSelector } from "../../commons/redux";
import { useEffect } from "react";
import { getAllSequences } from "../../redux/reducers/sequences";
import { openModal } from "../../commons/functions";
import { useNavigate } from "react-router-dom";

export default function Sequences() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.logged);
  const sequences = useAppSelector((state) => state.sequence.sequences);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    dispatch(getAllSequences());
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col gap-y-5 shadow items-center w-1/2 p-5 rounded-lg m-auto mt-5 max-sm:overflow-y-auto absolute top-1/3 tablet:w-[80%] tablet:top-16">
        {!sequences?.length ? (
          <>
            <p className="text-sm tablet:btn-xs">
              il n'y a pas de scénario enregistré
            </p>
          </>
        ) : (
          <>
            <SequencesTables sequences={sequences} />
          </>
        )}
        <div className="flex gap-5">
          <button
            className="btn btn-sm w-52 tablet:btn-xs"
            onClick={() => {
              openModal("my_modal_6");
            }}
          >
            Créer un nouveau scénario
          </button>
        </div>
      </div>
    </div>
  );
}
