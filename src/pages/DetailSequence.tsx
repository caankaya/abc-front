import { useEffect } from "react";
import Cards from "../components/Cards";
import LevelButton from "../components/LevelButton";
import { useAppDispatch, useAppSelector } from "../../commons/redux";
import { getCards } from "../../redux/reducers/session";

export default function DetailSequence() {
  const dispatch = useAppDispatch();
  const cards = useAppSelector((state) => state.session.cards);

  useEffect(() => {
    dispatch(getCards());
  }, []);
  return (
    <div className="DetailSequence">
      <LevelButton />
      {cards && cards.length !== 0 && <Cards cards={cards} />}
    </div>
  );
}
