import { Router } from "express";
import { trackPageView } from "../controllers/pageview-controller";

export default () => {
  let routes = Router();

  routes.get("/", trackPageView);

  return routes;
};
