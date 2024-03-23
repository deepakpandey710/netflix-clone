const User = require("../model/UserModel");

module.exports.addToLikedMovies = async (req, res) => {
    try {
        const { email, data } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            const { likedMovies } = user;
            const movieAlreadyLiked = likedMovies.find(({ id }) => (id === data.id));
            if (!movieAlreadyLiked) {
                await User.findByIdAndUpdate(
                    user._id,
                    {
                        likedMovies: [...user.likedMovies, data],
                    },
                    { new: true }
                );
                return res.json({ msg: "Movie added successfully" });
            } else {
                return res.json({ msg: "Movie already added to liked list" });
            }
        } else {
            await User.create({ email, likedMovies: [data] });
            return res.json({ msg: "Movie added successfully" });

        }
    } catch (error) {
        return res.json({ msg: "Error adding movie" })
    }
};

module.exports.getAllLikedMovies = async (req, res) => {
    try {
        const { email } = req.params;
        const data = await User.findOne({ email });
        return res.json({ movies: data.likedMovies });
    } catch (err) {
        return res.json({ msg: "Error fetching data" });
    }
};
module.exports.removeFromLikedList = async (req, res) => {
    try{
        const {email, movieId}=req.body;
        const user= await User.findOne({email});
        if(user){
            const movieList = user.likedMovies;
            const index = movieList.findIndex(({id})=>id===movieId);
            if(index!==-1){
                movieList.splice(index,1)
                await User.updateOne({email},{likedMovies:movieList});
                return res.json({msg:"removed from liked list",movies:movieList});
            }else{
                return res.json({msg:"movie is not present in liked list",movies:movieList});
            }
        }else{
            return res.json({msg:"user not found",movies:[]});
        }
    }catch(err){
        console.log(err)
        return res.json({msg:"some error occured",movies:[]});
    }
};