import { useAppDispatch, useAppSelector } from "../../commons/redux";
import { toggleLevelButton } from "../../redux/reducers/session";

export default function LevelButton() {
  const dispatch = useAppDispatch();
  const isChecked = useAppSelector((state) => state.session.levelButton);
  console.log("isChecked :", isChecked);
  return (
    <div className="level-switch-button">
      <div className="flex justify-center items-center gap-3 mt-3">
        <p
          className={`text-sm ${!isChecked ? "font-bold text-[#5e81ac]" : ""}`}
        >
          Novice
        </p>
        <input
          id="toggler"
          name="toggler"
          type="checkbox"
          className={`toggle toggle-md ${
            !isChecked ? "bg-[#5e81ac]" : "bg-[#bf616a]"
          }  `}
          checked={isChecked}
          onChange={() => {
            dispatch(toggleLevelButton(!isChecked));
          }}
        />
        <p className={`text-sm ${isChecked ? "font-bold text-[#bf616a]" : ""}`}>
          Expert
        </p>
      </div>
    </div>
  );
}
