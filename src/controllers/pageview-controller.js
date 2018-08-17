import { addPageView, getLastPageViews } from "../services/pageview-service";

function trackPageView(req, res, next) {
  addPageView()
    .then(r => getLastPageViews())
    .then(pageViews => {
      console.log("pageViews", pageViews);
      res.render("index", { pageViews: pageViews });
    });
}

export { trackPageView };
