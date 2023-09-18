const UserModel = require("../models/user.model");

module.exports.getUsers = async (req, res) => {
        const users = await UserModel.find();
        res.status(200).json(users)
 };

module.exports.setUsers = async (req, res) => {
    if (!req.body.name) {
    res.status(400).json({message: "Merci d'ajouter un nom d'utilisateur"})
    }
    const user = await UserModel.create({
        name: req.body.name,
        login: req.body.login,
        password: req.body.password
    })
    res.status(200).json(user)
};

module.exports.editUser = async (req, res) => {
    const user = await UserModel.findById(req.params.id)
    if (!user) {
        res.status(400).json({message: "Cet utilisateur n'existe pas"})
    }
    const updateUser = await UserModel.findByIdAndUpdate(
        user,
        req.body,
        {new: true}
    )
    res.status(200).json(updateUser);
};

module.exports.deleteUser = async (req, res) => {
    const user = await UserModel.findById(req.params.id);
    if (!user) {
        res.status(400).json({message: "Cet utilisateur n'existe pas"});
    }
    
    await user.deleteOne();

    res.status(200).json("Utilisateur supprimé " + req.params.id);
}



