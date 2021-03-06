const express = require("express");
const router = express.Router();

const {
  search,
  lead,
  team,
  vote,
  preview,
  today,
  party,
  hashtag,
  getLawInfo,
  searchByHashtag
} = require("../controller/law-controller");

router.get("/search/:key", search);
router.get("/lead/:name", lead);
router.get("/team/:name", team);
router.get("/vote/:id", vote);
router.get("/preview", preview);
router.get("/today", today);
router.get("/party", party);
router.get("/hashtag/:id", hashtag);
router.get("/getLawInfo/:id", getLawInfo);
router.get("/searchByHashtag/:key",searchByHashtag)
router.use("/", (err, req, res, next) => {
  next(err);
});

module.exports = router;
