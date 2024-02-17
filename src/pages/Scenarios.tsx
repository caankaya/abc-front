import ScenariosTables from "../components/ScenariosTables";

export default function Scenarios() {
  return (
    <div className="absolute w-full flex flex-col items-center justify-around mt-5">
      <p className="text-sm">il n'y a pas de scénario enregistré</p>
      <ScenariosTables />
    </div>
  );
}
