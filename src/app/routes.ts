import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Appointment from "./components/Appointment";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "about", Component: About },
      { path: "appointment", Component: Appointment },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
