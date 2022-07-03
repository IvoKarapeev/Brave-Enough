const Adventure = require('../models/Adventure');

exports.getAll = () => Adventure.find();

exports.create = (data) => Adventure.create(data);

exports.getOneDetailed = (id) => Adventure.findById(id).populate('joined');
