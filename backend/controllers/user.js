const User = require('../models/user');
const bcrypt = require("bcrypt");

const list = async (req, res) => {
    const users = await User.find({ name: new RegExp(req.params["name"], "i") });
    if (users.length === 0) return res.status(401).send({ message: 'Not users', data: users });
    return res.status(200).send(users);
};
const create = async (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password)
        return res.status(401).send({ message: 'incomplete data' });
    const user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send({ message: 'user already exists' });
    let hash = "";
    try {
        hash = await bcrypt.hash(req.body.password, 10);  
    } catch (error) {
        return res.status(400).send("Failes to register user");
    } 
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: hash
    });

    let result = await newUser.save();
    if (!result) return res.status(400).send("Failed to register user");

    try {
        let jwt = newUser.generateJWT();
        return res.status(200).send({ jwt });
    } catch (e) {
        return res.status(400).send("Failes to register user");
    }
}
module.exports = { create, list};