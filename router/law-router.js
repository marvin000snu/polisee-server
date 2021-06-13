const express = require("express");
const router = express.Router();

const { search, lead, team } = require("../controller/law-controller");

router.get("/search/:key", search);
router.get("/lead/:name", lead);
router.get("/team/:name", team);
router.use("/", (err, req, res, next) => {
  next(err);
});

module.exports = router;
