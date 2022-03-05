const dbCon = require("../../core/db");
const bcrypt = require("bcrypt");
const TABLE_NAME = "utilisateur";



let UserModel =  function (user) {
    this.prenom = user.prenom;
    this.nom = user.nom;
    this.telephone = user.telephone;
    this.login = user.login;
    this.password =  user.password;
    this.active = user.active ? user.active : 1;
    this.created_at = new Date();
    this.updated_at = null;
}

/**
 * Get all users
 */
UserModel.findAll = (result)=>{
    dbCon.query(`SELECT * FROM ${TABLE_NAME}`, (err, res)=>{
        if(err){
            result(null , err)
        }else{
            result (null, res);
        }
    })
}
/**
 * GET USER BY ID
 * @param id
 * @param result
 */
UserModel.find = (id, result)=>{
    dbCon.query(`SELECT * FROM ${TABLE_NAME} WHERE id = ?`, id,(err, res)=>{
        if(err){
            result(null , err)
        }else{
            result (null, res);
        }
    })
}

/**
 * GET USER BY ID
 * @param id
 * @param result
 */
UserModel.login = (login,result)=>{
    dbCon.query(`SELECT * FROM ${TABLE_NAME} WHERE login = ? LIMIT 1`, login,(err, res)=>{
        if(err){
            result(null , err)
        }else{
            result (null, res);
        }
    })
}

/**
 * CREATE USER
 * @param data
 * @param result
 */
UserModel.create = (data, result) => {
    dbCon.query(`INSERT INTO ${TABLE_NAME} SET ?`, data,(err, res)=>{
        if(err){
            result(null , err)
        }else{
            result (null,res);
        }
    })
}
/**
 * UPDATE USER
 * @param id
 * @param data
 * @param result
 */
UserModel.update = (id, data, result) => {
    dbCon.query(`UPDATE  ${TABLE_NAME} SET prenom = ?, nom = ?, telephone = ?, login = ?,password = ?, active = ?, updated_at = ? WHERE id = ?`,
        [data.prenom, data.nom, data.telephone,data.login,data.password,data.active,new Date(), id],(err, res)=>{
        if(err){
            result(null , err)
        }else{
            result (null,res);
        }
    })
}

module.exports = UserModel