const express = require("express");
const router = express.Router();

const { getAllPeople} = require("../controller/people-controller");

router.get("/getAllPeople", getAllPeople);
router.use("/", (err, req, res, next) => {
  next(err);
});

module.exports = router;
