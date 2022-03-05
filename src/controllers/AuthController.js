const UserModel =  require("../models/UserModel")
const bcrypt = require("bcrypt");
const jwt = require("../services/jwt");

exports.connect = (req, res) =>{
    UserModel.login(req.body.login, async (err, user) => {
        if (err) res.send(err)
        let data = user[0];
        const validPassword = await bcrypt.compare(req.body.password, data.password);
        if (validPassword) {
            let jwtToken = jwt.generateAccessToken(data.id,data.nom, data.prenom)
            res.status(200).json({token: jwtToken});
        } else {
            res.status(400).json({error: "Invalid Password"});
        }
    });
}