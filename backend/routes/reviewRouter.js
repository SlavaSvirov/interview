const express = require('express');
const router = express.Router();
const reviewModel = require('../database/models/review');
const userModel = require('../database/models/user');

router
  .get('/', async (req, res) => {
    // все последние отзывы юзера
    // Reviews.find()
    let dbData = await reviewModel.find().populate('author');
    console.log(dbData);
    res.json(dbData);
  })
  
  .post('/', async (req, res) => {
    console.log('gdfsgsdgsdgsdgf');
    const file = req.file
      ? `http://localhost:3001/public/img/${req.file.filename}`
      : '';

    const companyName = await axios(
      `api.hh.ru/employers/${req.body.companyName}`
    );

    let dbData = await reviewModel.create({
      author: req.session.user.id,
      companyName: companyName.data.name,
      direction: req.body.direction,
      position: req.body.position,
      salary: req.body.salary,
      setteled: req.body.setteled,
      rating: req.body.rating,
      questions: req.body.questions,
      impression: req.body.impression,
      hrName: req.body.hrName,
      codFile: req.body.codFile,
      companyIdHH: req.body.companyName,
      image: file,
    });
    console.log(dbData);
    return res.json(dbData);

    // console.log(dbData);
  })
  .delete('/profile', (req, res) => {
    // Reviews.FindByIdAndDelete
  });
module.exports = router;
