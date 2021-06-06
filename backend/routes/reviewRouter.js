const express = require('express');
const router = express.Router();
const reviewModel = require('../database/models/review');
//const user = require('../database/models/user');
const userModel = require('../database/models/user');
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router
  .get('/', async (req, res) => {
    // все последние отзывы юзера
    // Reviews.find()
    let dbData = await reviewModel.find().populate('author');
    console.log(dbData);
    res.json(dbData);
  })
  .post('/', async (req, res) => {
    console.log(req.file);
    // console.log(req.body);
    // let user = await userModel.findById(req.session.user.id)
    let dbData = await reviewModel.create({
      author: req.session.user.id,
      companyName: req.body.companyName,
      direction: req.body.direction,
      position: req.body.position,
      salary: req.body.salary,
      setteled: req.body.setteled,
      rating: req.body.rating,
      questions: req.body.questions,
      impression: req.body.impression,
      hrName: req.body.hrName,
      codFile: req.body.codFile,
      companyIdHH: req.body.companyIdHH,
      image: `/img/${req.file.filename}`,
    });
    // console.log(dbData);
    return res.json(dbData);
  })
  .delete('/profile', (req, res) => {
    // Reviews.FindByIdAndDelete
  });
module.exports = router;
