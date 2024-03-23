const { addToLikedMovies,test, getAllLikedMovies,removeFromLikedList } = require("../controller/UserController");

const router= require("express").Router();
router.post("/add", addToLikedMovies);
router.put("/remove", removeFromLikedList);
router.get("/getAllData/:email", getAllLikedMovies);



module.exports=router;