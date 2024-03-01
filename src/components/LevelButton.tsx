import { useAppDispatch, useAppSelector } from "../../commons/redux";
import { toggleLevelButton } from "../../redux/reducers/other";

export default function LevelButton() {
  const dispatch = useAppDispatch();
  const isChecked = useAppSelector((state) => state.session.levelButton);
  return (
    <div className="level-switch-button mb-10">
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
          className={`toggle toggle-md  ${
            !isChecked
              ? "bg-[#5e81ac] hover:bg-[#3467a7]"
              : "bg-[#bf616a] hover:bg-[#c03846]"
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
