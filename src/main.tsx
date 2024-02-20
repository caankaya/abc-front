import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "../redux/store";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout";
import App from "./app/App";
import "../src/styles/index.css";
import Sequences from "./pages/Sequences";
import DetailSequence from "./pages/DetailSequence";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={"404"}>
      <Route index element={<App />} />
      <Route path="/scenarios" element={<Sequences />} />
      <Route path="/scenarios/:id" element={<DetailSequence />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
