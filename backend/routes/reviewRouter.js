const express = require('express');
const router = express.Router();
const reviewModel = require('../database/models/review');
const userModel = require('../database/models/user');
const axios = require('axios');
const Company = require('../database/models/company');

router
  .get('/', async (req, res) => {
    let dbData = await reviewModel.find().populate('author');
    res.json(dbData);
  })

  .post('/:id', async (req, res) => {
    let dbPost = await reviewModel.findById(req.params.id);
    dbPost.likes += 1;
    await dbPost.save();
    res.json(dbPost);
  })

  .post('/', async (req, res) => {
    const file = req.file ? `/img/${req.file.filename}` : '';

    const companyName = await axios(
      `http://api.hh.ru/employers/${req.body.companyName}?User-Agent=api-test-agent`
    );
    const review = await reviewModel.create({
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
    }).populate('reviews');
    if (company) {
      company.reviews.push(review._id);
      await company.save();
      const reduceCompany = await Company.findOne({
        companyIdHH: req.body.companyName,
      }).populate('reviews');
      reduceCompany.rating = Math.round(
        reduceCompany.reviews?.reduce((acc, review) => {
          return (acc += +review.rating);
        }, 0) / reduceCompany.reviews.length
      );

      await reduceCompany.save();
      review.company = company._id;
      await review.save();
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

      const populateCompany = await Company.findById(newCompany._id).populate(
        'reviews'
      );

      populateCompany.rating = review.rating;
      await populateCompany.save();
      review.company = populateCompany._id;
      await review.save();
    }

    return res.sendStatus(200);
  })
  .delete('/profile', (req, res) => {
    // Reviews.FindByIdAndDelete
  });

module.exports = router;
