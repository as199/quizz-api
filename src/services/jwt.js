const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config()

function generateAccessToken(id, nom, prenom) {
    return jwt.sign(
        {user_id: id, nom: nom, prenom: prenom},
        process.env.SECRET_KEY,
        {
            expiresIn: "2h",
        },null
    );
}
module.exports = { generateAccessToken }