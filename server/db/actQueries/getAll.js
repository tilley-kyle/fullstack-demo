const Bug = require('../queries.js');
const mongoose = require('mongoose');

const getAll = () => {
    return Bug.find();
}

export.modules = getAll;