const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    name: String,
});

const categoryModel = mongoose.model('category', categorySchema)


module.exports = categoryModel;