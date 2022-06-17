
import { lazy} from "solid-js";

export const routes = [

  {
    path: "/",
    component: lazy(() => import("./pages/home/index.")),
  },
  {
    path: "/about",
    component: lazy(() => import("./pages/about" )),
  },

  {
    path: "/work",
    component: lazy(() => import("./pages/work")),
  },

];