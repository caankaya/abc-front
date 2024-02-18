import SequencesTables from "../components/SequencesTables";

export default function Sequences() {
  return (
    <div className="absolute w-full flex flex-col items-center justify-around mt-5">
      <p className="text-sm">il n'y a pas de scénario enregistré</p>
      <SequencesTables />
    </div>
  );
}
