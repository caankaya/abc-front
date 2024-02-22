import { useEffect } from "react";
import Cards from "../components/Cards";
import LevelButton from "../components/LevelButton";
import { useAppDispatch, useAppSelector } from "../../commons/redux";
import { getCards } from "../../redux/reducers/card";
import SessionsTables from "../components/SessionsTables";
import { getOneSequence } from "../../redux/reducers/sequences";

export default function DetailSequence() {
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.card.cards);
  const sessions = useAppSelector((state) => state.sequence.sequence);
  const sequenceId = Number(sessionStorage.getItem("sequence_id"));

  useEffect(() => {
    dispatch(getCards());
    dispatch(getOneSequence(sequenceId));
  }, []);
  return (
    <div className="DetailSequence">
      <LevelButton />
      {cards && cards.length !== 0 && <Cards cards={cards} />}
      {sessions && <SessionsTables sequence={sessions} />}
    </div>
  );
}
