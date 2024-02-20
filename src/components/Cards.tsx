import { ICards } from "../@types/cards";

export default function Cards({ cards }: { cards: ICards[] }) {
  return (
    <section className="flex m-3 gap-3 tablet:flex-col tablet:mb-20">
      {cards &&
        cards.map((card, index) => (
          <div
            key={index}
            style={{ background: `${card.color}` }}
            className={`card card-compact w-96 bg-base-100 shadow-xl tablet:w-full`}
          >
            <div className="card-body" key={card.id}>
              <h2 className="card-title text-white">{card.name}</h2>
              <p className="card-text text-white">{card.comments}</p>
              <div className="card-actions justify-end">
                <button className={`btn btn-sm normal-case`}>Activités</button>;
              </div>
            </div>
          </div>
        ))}
    </section>
  );
}
