const router = require("express").Router();
const { default: axios } = require("axios");
router.get("/", async (req, res, next) => {
  try {
    const users = await axios
      .get("https://jsonplaceholder.typicode.com/users", {
        headers: { "Accept-Encoding": "gzip,deflate,compress" },
      })
      .then((response) => response.data);
    return res.json(users);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
