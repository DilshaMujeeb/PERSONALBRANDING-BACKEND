var mongoose = require("mongoose");
require("dotenv").config();

// const {
//   TrustProductsEvaluationsInstance,
// } = require("twilio/lib/rest/trusthub/v1/trustProducts/trustProductsEvaluations");
var ObjectId = require("mongodb").ObjectId;
const db = mongoose
  .connect(process.env.MONGO_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));
