import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { ISequence, Session } from "../@types/sequence";

ChartJS.register(ArcElement, Tooltip, Legend);

interface AggregatedData {
  [choice: string]: number;
}

function PieChart({ sessions }: { sessions: ISequence[] }) {
  function aggregateSessionsByChoice(sessions: Session[]): AggregatedData {
    const aggregatedData: AggregatedData = {};

    sessions.forEach((session) => {
      const choice = session.card_name;
      const time = session.time;

      if (aggregatedData[choice]) {
        aggregatedData[choice] += time;
      } else {
        aggregatedData[choice] = time;
      }
    });

    return aggregatedData;
  }
  const session = sessions.map((e) => e.sessions).flat();
  const aggregatedData = aggregateSessionsByChoice(session);

  const labels = Object.keys(aggregatedData);
  const times = Object.values(aggregatedData);

  const backgroundColor = sessions
    .map((e) => e.sessions.map((el) => el.color))
    .flat();

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Durée en minute",
        data: times,
        backgroundColor: backgroundColor,
        borderWidth: 1,
      },
    ],
  };
  const pieStyle = {
    maxWidth: "50%",
    maxHeight: "50vh",
    marginTop: "4rem",
  };
  ChartJS.defaults.font.size = 12;
  return <Pie data={data} style={pieStyle} />;
}

export default PieChart;
