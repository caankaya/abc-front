import { openModal } from "../../commons/functions";
import { useAppDispatch } from "../../commons/redux";
import { getCard } from "../../redux/reducers/card";
import { ICards } from "../@types/cards";
import CardModal from "./CardModal";

export default function Cards({ cards }: { cards: ICards[] }) {
  const dispatch = useAppDispatch();
  return (
    <section className="flex m-3 gap-3 tablet:flex-col tablet:mb-20 tablet:items-center">
      {cards &&
        cards.map((card, index) => (
          <div
            key={index}
            style={{ background: `${card.color}` }}
            className="card card-compact w-96 bg-base-100 shadow-xl tablet:w-[80%]"
          >
            <div className="card-body" key={card.id}>
              <h2 className="card-title text-white tablet:text-[1rem]">
                {card.name}
              </h2>
              <p className="card-text text-white">{card.comments}</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-sm normal-case tablet:btn-xs"
                  onClick={() => {
                    dispatch(getCard(card.id));
                    setTimeout(() => {
                      openModal("tool-modal");
                    }, 100);
                  }}
                >
                  Activités
                </button>
              </div>
            </div>
          </div>
        ))}
      <CardModal />
    </section>
  );
}
