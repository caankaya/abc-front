import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout";
import App from "./app/App";
import "../src/styles/index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={""}>
      <Route errorElement={""}>
        <Route index element={<App />} />
        {/* Compléter le router avec d'autres pages à partir de là*/}
        {/* Oubliez pas d'ajouter Outlet dans le composant Layout*/}
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
