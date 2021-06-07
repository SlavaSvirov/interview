const express = require('express');
const router = express.Router();
const reviewModel = require('../database/models/review');
const userModel = require('../database/models/user');
const axios = require('axios');
const Company = require('../database/models/company');

router
  .get('/', async (req, res) => {
    // все последние отзывы юзера
    // Reviews.find()
    let dbData = await reviewModel.find().populate('author');
    console.log(dbData);
    res.json(dbData);
  })

  .post('/', async (req, res) => {
    const file = req.file
      ? `http://localhost:3001/public/img/${req.file.filename}`
      : '';

    const companyName = await axios(
      `http://api.hh.ru/employers/${req.body.companyName}?User-Agent=api-test-agent`
    );
    console.log(companyName);
    let review = await reviewModel.create({
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
      companyId: req.body.companyName,
      image: file,
    });
    const company = await Company.findOne({
      companyIdHH: req.body.companyName,
    });
    if (company) {
      company.reviews.push(review._id);
      await company.save();
    } else {
      const newCompany = await Company.create({
        companyName: companyName.data.name,
        reviews: [review._id],
        companyIdHH: req.body.companyName,
        companyUrl: companyName.data.site_url,
        logo: companyName.data.logo_urls,
        description: companyName.data.description,
        area: companyName.data.area.name,
      });
    }
    return res.sendStatus(200);

    // console.log(dbData);
  })
  .delete('/profile', (req, res) => {
    // Reviews.FindByIdAndDelete
  });
module.exports = router;
