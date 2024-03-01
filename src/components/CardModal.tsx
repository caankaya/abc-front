import { closeModal, openModal } from "../../commons/functions";
import { useAppSelector } from "../../commons/redux";
import CreateSessionModal from "./sub-components-session-modal/CreateSessionModal";

export default function CardModal() {
  const card = useAppSelector((state) => state.card.card);
  const isChecked = useAppSelector((state) => state.session.levelButton);

  return (
    <>
      <dialog id="tool-modal" className="modal">
        <div
          className="modal-box w-2/6 max-w-5xl tablet:w-4/6"
          style={{ background: card?.get_activities.color }}
        >
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white"
              onClick={() => {
                closeModal("tool-modal");
              }}
            >
              ✕
            </button>
          </form>
          <h2 className="text-md font-semibold text-center text-white mb-2">
            {card?.get_activities.card_name}
          </h2>
          <div className="mb-5">
            {card?.get_activities.activities.map((activities, index) => (
              <li className="py-2 text-white text-sm" key={index}>
                {activities}
              </li>
            ))}
          </div>
          {card?.get_activities.tool_categories.map((tool, index) => (
            <div className="flex flex-col gap-1" key={index}>
              <p className="text-sm text-white font-semibold">
                {tool.tool_category_name}
              </p>
              <div>
                {!isChecked &&
                  tool.tools
                    .filter((e) => e.level_id === 1)
                    .map((e) => (
                      <button
                        key={e.tool_name}
                        className="btn btn-sm normal-case mr-2 mb-5 tablet:btn-xs"
                        type="button"
                        onClick={() => {
                          sessionStorage.setItem("tool_id", e.tool_id);
                          closeModal("tool-modal");
                          openModal("create-session");
                        }}
                      >
                        {e.tool_name}
                      </button>
                    ))}
                {isChecked &&
                  tool.tools.map((e) => (
                    <button
                      key={e.tool_name}
                      className="btn btn-sm normal-case mr-2 mb-5"
                      type="button"
                      onClick={() => {
                        sessionStorage.setItem("tool_id", e.tool_id);
                        closeModal("tool-modal");
                        openModal("create-session");
                      }}
                    >
                      {e.tool_name}
                    </button>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </dialog>
      {card && <CreateSessionModal card={card} />}
    </>
  );
}
