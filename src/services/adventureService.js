const Adventure = require('../models/Adventure');
const User = require('../models/User');

exports.getAll = () => Adventure.find();

exports.create = (data) => Adventure.create(data);

exports.getOneDetailed = (id) => Adventure.findById(id).populate('joined');

exports.joinAdventure = async (adventureId,userId) => {

    const adventure = await Adventure.findById(adventureId);
    const user = await User.findById(userId);

    adventure.joined.push(user);
    adventure.places -= 1;

    await adventure.save();

    return adventure;
}