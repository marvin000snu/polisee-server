const express = require("express");
const router = express.Router();

const { getAllPeople, getMainAttendData, getSubAttendData, getAttendRate, grade,attendAll} = require("../controller/people-controller");

router.get("/getAllPeople", getAllPeople);
router.get("/getMainAttendData/:id",getMainAttendData)
router.get("/getSubAttendData/:id",getSubAttendData)
router.get("/getAttendRate/:id",getAttendRate)
router.get("/grade/:id",grade)
router.get("/attendAll",attendAll)
router.use("/", (err, req, res, next) => {
  next(err);
});

module.exports = router;

