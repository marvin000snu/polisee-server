const express = require("express");
const router = express.Router();

const { search} = require("../controller/law-controller");

router.get("/search/:key", search);
router.use("/", (err, req, res, next) => {
  next(err);
});

module.exports = router;

