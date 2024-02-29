import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { ISequence } from "../@types/sequence";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export function LeftBarChart({ sessions }: { sessions: ISequence[] }) {
  let faceToFace: number = 0;
  let remote: number = 0;

  sessions.map((session) =>
    session.sessions.map((work) => {
      if (work.is_face_to_face) {
        return (faceToFace += work.time);
      }
      return (remote += work.time);
    })
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
      },
    },
  };

  const labels = ["Présentiel", "Distanciel"];

  const data = {
    labels,
    datasets: [
      {
        label: "Présentiel",
        data: [faceToFace, 0],
        backgroundColor: ["rgba(255, 99, 132, 0.5)"],
        borderColor: ["rgb(255, 99, 132)"],
        borderWidth: 1,
        barThickness: 80,
      },
      {
        label: "Distanciel",
        data: [0, remote],
        backgroundColor: ["rgba(75, 192, 192, 0.5)"],
        borderColor: ["rgb(75, 192, 192)"],
        borderWidth: 1,
        barThickness: 80,
      },
    ],
  };

  const style = {
    maxWidth: "20%",
    maxHeight: "50vh",
    marginTop: "4rem",
  };

  return <Bar options={options} data={data} style={style} />;
}
