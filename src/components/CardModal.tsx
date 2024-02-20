import { useAppDispatch, useAppSelector } from "../../commons/redux";

export default function CardModal() {
  const dispatch = useAppDispatch();
  const card = useAppSelector((state) => state.session.card);
  const isChecked = useAppSelector((state) => state.session.levelButton);

  return (
    <dialog id="my_modal_8" className="modal">
      <div
        className="modal-box w-full lg:max-w-5xl flex gap-2 max-md:max-w-2xl"
        style={{ background: card?.get_activities.color }}
      >
        <div
          className="card w-96 bg-base-100"
          style={{
            background: card?.get_activities.color,
          }}
        >
          <div className="card-body">
            <h2 className="card-title text-white">
              {card?.get_activities.card_name}
            </h2>
            <ul>
              {card?.get_activities.activities.map((activities, index) => (
                <li className="py-2 text-white" key={index}>
                  {activities}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="card bg-base-100  w-full flex flex-col justify-between content-between"
          style={{
            background: card?.get_activities.color,
          }}
        >
          {card?.get_activities.tool_categories.map((tool, index) => (
            <div className="card-body flex" key={index}>
              <strong className="card-title text-sm text-white">
                {tool.tool_category_name}
              </strong>
              <p>
                {!isChecked &&
                  tool.tools
                    .filter((e) => e.level_id === 1)
                    .map((e) => (
                      <button
                        key={e.tool_name}
                        className="btn btn-sm normal-case m-1"
                        type="button"
                        onClick={() => {}}
                      >
                        {e.tool_name}
                      </button>
                    ))}
                {isChecked &&
                  tool.tools.map((e) => (
                    <button
                      key={e.tool_name}
                      className="btn btn-sm normal-case m-1"
                      type="button"
                      onClick={() => {}}
                    >
                      {e.tool_name}
                    </button>
                  ))}
              </p>
            </div>
          ))}
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button></button>
      </form>
    </dialog>
  );
}
