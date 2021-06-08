const express = require('express');
const router = express.Router();
const CompanyModel = require('../database/models/company');

router.get('/', async (req, res) => {
  const allCompanyFromServer = await CompanyModel.find();
  // console.log('allCompanyFromServer======', allCompanyFromServer);
  res.json(allCompanyFromServer);
});

router.post('/', async (req, res) => {
  console.log(req.body.text);
  const currentCompanyFromServer = await CompanyModel.find({
    companyName: { $regex: req.body.text },
  });
  console.log(currentCompanyFromServer);
  res.json(currentCompanyFromServer);
});

router.get('/:id', async (req, res) => {
  const currentCompany = await CompanyModel.findById(req.params.id).populate({
    path: 'reviews',
    populate: {
      path: 'author',
    },
  });

  console.log('currentCompany', currentCompany);
  res.json(currentCompany);
});

module.exports = router;
