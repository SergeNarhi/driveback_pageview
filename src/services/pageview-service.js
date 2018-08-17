import PageView from "./models/pageview";
console.log(111, PageView);
function addPageView() {
  return PageView.create({ created_at: new Date() });
}

function getLastPageViews() {
  const dateFrom = new Date(Date.now() - 60 * 1000);
  return PageView.getLastPageViews(dateFrom);
}

export { addPageView, getLastPageViews };
