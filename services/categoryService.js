const categoryModel = require('../models/categoryModel.js')

exports.getCategories = (req, res, next) => {
    const name = req.body.name;
    console.log(name);


    const  newCategory = new categoryModel({name: name});
    newCategory.save()
    .then((doc) => {
        res.json(doc);
    })
    .catch((err) => {
        res.json(err)
    });
}

