const express = require("express");
const router = express.Router();

const { getAllPeople, getMainAttendData, getSubAttendData, getAttendRate} = require("../controller/people-controller");

router.get("/getAllPeople", getAllPeople);
router.get("/getMainAttendData/:id",getMainAttendData)
router.get("/getSubAttendData/:id",getSubAttendData)
router.get("/getAttendRate/:id",getAttendRate)
router.use("/", (err, req, res, next) => {
  next(err);
});

module.exports = router;

