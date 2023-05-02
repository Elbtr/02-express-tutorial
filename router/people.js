const express = require("express");
const router = express.Router();

const {
  getPeople,
  postPerson,
  postPersonPostman,
  putPeople,
  deletePeople,
} = require("../controllers/people");

// router.get("/", getPeople);

// router.post("/", postPerson);

// router.post("/postman", postPersonPostman);

// router.put("/:id", putPeople);

// router.delete("/:id", deletePeople);

router.route("/").get(getPeople).post(postPerson);
router.route("/postman").post(postPersonPostman);
router.route("/:id").put(putPeople).delete(deletePeople);

module.exports = router;
