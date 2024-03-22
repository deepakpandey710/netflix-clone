const { addToLikedMovies,test, getAllLikedMovies } = require("../controller/UserController");

const router= require("express").Router();
router.post("/add", addToLikedMovies);
router.get("/getAllData/:email", getAllLikedMovies);


module.exports=router;