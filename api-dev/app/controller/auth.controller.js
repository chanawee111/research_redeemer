const db = require('../models'); //import db from index.js at models folder 
const config = require('../config/auth.config'); //secret Key
const User = db.user; //import user function and stored in User variation
const Role = db.role; //import role function and stored in Role variation

const Op = db.Sequelize.Op; //require Operator in Sequelize

var jwt = require('jsonwebtoken'); //import jsonwebtoken module
var bcrypt = require('bcryptjs'); // import bcryptjs module

exports.signup = (req, res) => { //declaration signup function
    //Save User to Database
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password,8)
    }).then(user => {
        if(req.body.roles) {
            Role.findAll({
                where: {
                    name : {[Op.or] : req.body.roles}
                }
            }).then(roles => {
                user.setRoles(roles).then(()=>{
                    res.send({message:"User registered successfully!"});
                });
            });
        }else{
            user.setRoles([1]).then(()=>{
                res.send({message:"User registered successfully!"});
            })
        }
    }).catch(err=>{
        res.status(500).send({message: err.message});
    })
};

exports.signin = (req,res) => {
    User.findOne({
        where: {
            username : req.body.username
        }
    }).then(user => {
        if(!user){
            return res.status(404).send({message: "User Not found."});
        }

        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if(!passwordIsValid){
            return res.status(401).send({
                accessToken:null,
                message:"Invalid Password!"
            });
        }

        var token = jwt.sign({id:user.id},config.secret,{expiresIn:86400}) // 24hr
        var authorities = [];
        user.getRoles().then(roles=>{
            for(let i = 0; i < roles.length; i++){
                authorities.push("ROLE_" + roles[i].name.toUpperCase());
            }
            res.status(200).send({
                id: user.id,
                username: user.username,
                email: user.email,
                roles: authorities,
                accessToken: token
            });
        });
    }).catch(err =>{
        res.status(500).send({message: err.message});
    }); 
}