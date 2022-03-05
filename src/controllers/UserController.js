const UserModel =  require("../models/UserModel")
const bcrypt = require("bcrypt");

exports.getUsers = (req, res) =>{
    UserModel.findAll((err, users)=>{
        if(err) res.send(err)
        console.log("users ", users)
        res.send(users)
    });
}

exports.getUserByID = (req, res) =>{
    UserModel.find(req.params.id,(err, users)=>{
        if(err) res.send(err)
        console.log("users ", users)
        res.send(users)
    });
}

exports.createUser = async (req, res) => {
    const userReqData = new UserModel(req.body);
    const salt = await bcrypt.genSalt(10);
    userReqData.password = await bcrypt.hash(userReqData.password, salt);
    console.log("user", userReqData)
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({
            success: false, message: "Please fill all fields"
        });
    } else {
        UserModel.create(userReqData, (err, user) => {
            if (err) res.send(err)

            res.json({status: true, message: "User created successfully", data: user})
        });
    }

}

exports.updateUser = async (req, res) => {
    const userReqData = new UserModel(req.body);
    console.log("user", userReqData)
    const salt = await bcrypt.genSalt(10);
    userReqData.password = await bcrypt.hash(userReqData.password, salt);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({
            success: false, message: "Please fill all fields"
        });
    } else {
        UserModel.update(req.params.id, userReqData, (err, user) => {
            if (err) res.send(err)

            res.json({status: true, message: "User updated successfully", data: user})
        });
    }

}
