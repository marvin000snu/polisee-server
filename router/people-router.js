const express = require("express");
const router = express.Router();

const { getAllPeople, getMainAttendData} = require("../controller/people-controller");

router.get("/getAllPeople", getAllPeople);
router.get("/getMainAttendData/:id",getMainAttendData)
router.use("/", (err, req, res, next) => {
  next(err);
});

module.exports = router;

