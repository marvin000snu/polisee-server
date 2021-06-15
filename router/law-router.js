const express = require("express");
const router = express.Router();

const { search, lead, team, vote, preview, today } = require("../controller/law-controller");

router.get("/search/:key", search);
router.get("/lead/:name", lead);
router.get("/team/:name", team);
router.get("/vote/:id", vote)
router.get("/preview", preview)
router.get("/today", today)

router.use("/", (err, req, res, next) => {
  next(err);
});

module.exports = router;
