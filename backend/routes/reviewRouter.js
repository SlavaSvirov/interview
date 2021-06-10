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
    if (!dbPost.likes.includes(req.body.userId)) {
      dbPost.likes.push(req.body.userId);
      await dbPost.save();
    }
    console.log(dbPost);
    res.json(dbPost);
  })

  .patch('/:id', async (req, res) => {
    console.log(req.body);
    const reviewForUpdate = await reviewModel.findById(req.params.id);
    const file = req.file ? `/img/${req.file.filename}` : '';
    Object.keys(req.body).forEach((key) => {
      reviewForUpdate[key] = req.body[key];
    });
    await reviewForUpdate.save();
    return res.json(reviewForUpdate);
  })

  .post('/', async (req, res) => {
    console.log(req.body);
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

    return res.json(review);
  })
  .patch('/edit/:id', async (req, res) => {
    const reviewForUpdate = await reviewModel.findById(req.params.id); //find review by id in DB
    let regex = /\d*/g;
    let dat = req.body.companyName;
    let regFromInput = dat.replace(regex, '');
    if (regFromInput) {
      const file = req.file ? `/img/${req.file.filename}` : '';
      if (reviewForUpdate.companyName == req.body.companyName) {
        //control if company is the same
        if (reviewForUpdate.rating !== req.body.rating) {
          //if rating for this company was changed
          let idCompany = reviewForUpdate.company;
          const companyToChangeRating = await Company.findById(
            idCompany
          ).populate('reviews');
          console.log(companyToChangeRating);
          companyToChangeRating.rating = Math.round(
            companyToChangeRating.reviews?.reduce((acc, review) => {
              //calc rating
              return (acc += +review.rating);
            }, 0) / companyToChangeRating.reviews.length
          );
          Object.keys(req.body).forEach((key) => {
            //changing key
            reviewForUpdate[key] = req.body[key];
          });
          await companyToChangeRating.save(); //save company
        }
        await reviewForUpdate.save(); //save review
      }
    } else {
      // control if company is not the same
      let companyToFind = reviewForUpdate.company; //looking in DB COmpany where was review in oder to del review
      console.log(companyToFind);
      const companyReviewUpdate = await Company.findById(
        // find the company with old data to update
        companyToFind
      );
      console.log('PARAMS', req.params.id);
      console.log(
        'Updating Company were was review before',
        companyReviewUpdate
      );
      let indexOfId = companyReviewUpdate.reviews.indexOf(req.params.id); // find index of id of old review
      companyReviewUpdate.reviews.splice(indexOfId, 1); // deleting in array review
      if (companyReviewUpdate.reviews.length) {
        // if company have review
        await companyReviewUpdate.populate('reviews').save();
        console.log(companyReviewUpdate);
        let rating = Math.round(
          //calc rating and save
          companyReviewUpdate.reviews?.reduce((acc, review) => {
            return (acc += +review.rating);
          }, 0) / companyReviewUpdate.reviews.length
        );
        console.log('RATING', rating);
        await companyReviewUpdate.save();
      } else {
        await companyReviewUpdate.remove(); //no review anymore we drop company
      }
      // find new company for update
      const newCompanyReviewUpdate = await Company.findOne({
        // find the company in BD with old data to update
        companyId: req.body.companyName,
      });
      if (newCompanyReviewUpdate) {
        //control if in our BD this company exist
        newCompanyReviewUpdate.reviews.push(reviewForUpdate._id); //add id in array
        await newCompanyReviewUpdate.save(); //saving for calc rating
        newCompanyReviewUpdate.populate('reviews');
        newCompanyReviewUpdate.rating = Math.round(
          //calc rating and save
          newCompanyReviewUpdate.reviews?.reduce((acc, review) => {
            return (acc += +review.rating);
          }, 0) / newCompanyReviewUpdate.reviews.length
        );
        await newCompanyReviewUpdate.save(); //saving final
      } else {
        //if company not in DB
        const companyName = await axios(
          `http://api.hh.ru/employers/${req.body.companyName}?User-Agent=api-test-agent`
        );
        const newCompany = await Company.create({
          //save new company with dta from api and body
          companyName: companyName.data.name,
          reviews: [req.params.id],
          companyIdHH: req.body.companyName,
          companyUrl: companyName.data.site_url,
          logo: companyName.data.logo_urls,
          description: companyName.data.description,
          area: companyName.data.area.name,
          rating: req.body.rating,
        });
        Object.keys(req.body).forEach((key) => {
          //changing value of old review
          reviewForUpdate[key] = req.body[key];
        });
        reviewForUpdate.companyName = companyName.data.name; //saving name company
        await reviewForUpdate.save();
      }
    }
    console.log({ reviewForUpdate });
    return res.json(reviewForUpdate);
  })
  .delete('/', (req, res) => {
    // Reviews.FindByIdAndDelete
  });

module.exports = router;
