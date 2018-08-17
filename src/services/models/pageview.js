import db from "../datasource";
import crudFactory from "./crud-factory";

const TABLE_NAME = "pageview";
const crud = crudFactory(TABLE_NAME);
const extra = {
  // extra methods
  getLastPageViews: function(dateFrom) {
    return db
      .table(TABLE_NAME)
      .select("*")
      .where("created_at", ">", dateFrom);
  }
};

const PageView = Object.assign({}, crud, extra);
export default PageView;
