var mongoose = require("mongoose");
// const {
//   TrustProductsEvaluationsInstance,
// } = require("twilio/lib/rest/trusthub/v1/trustProducts/trustProductsEvaluations");
var ObjectId = require("mongodb").ObjectId;
const db = mongoose
  .connect("mongodb://0.0.0.0:27017/cxo_branding", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));
