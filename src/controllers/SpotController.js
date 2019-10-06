const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports ={
    async index(req, resp){
        const { tech } = req.query;

        const spots = await Spot.find({techs: tech });

        return resp.json(spots);
    },
    async store(req, resp){
        const { filename} = req.file;
        const { company, price, techs } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id );

        if(!user){
            return resp.status(400).json({ error: "User doesn't not exists" });
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            price,
            techs: techs.split(',').map( tech => tech.trim()),
        });
        console.log(spot)
        return resp.json( spot );
    }
}