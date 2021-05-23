const express = require("express");
const router = express.Router();
const cors = require('cors')
router.use(cors())
const peopleRouter=require("./people-router.js") 
router.use("/people", peopleRouter);

router.use("/", (err, req, res, next) => {
    next(err)
})


module.exports = router; 