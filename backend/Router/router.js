require("dotenv").config();
require("../Database/database");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = express.Router();
const auth = require("./auth");
const Channel = require("./channel");
const Videos = require("./videos");
const Likes = require("./likes");
const Comments = require("./comments");
const Studio = require("./studio");


router.use(
  cors({
    // origin: ["https://example.app", "http://localhost:5173","http://localhost:5173"],
    origin: "http://localhost:5173",
    methods: ["POST", "GET"],
    credentials: true,
  })
);
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(auth);
router.use(Channel);
router.use(Videos);
router.use(Likes);
router.use(Comments);
router.use(Studio);

module.exports = router;
