const express = require('express');
const router = express.Router();
const CompanyModel = require('../database/models/company');

router.get('/', async (req, res) => {
  const allCompanyFromServer = await CompanyModel.find();
  res.json(allCompanyFromServer);
});

router.post('/', async (req, res) => {
  const currentCompanyFromServer = await CompanyModel.find({
    companyName: { $regex: new RegExp('^' + req.body.text.toLowerCase(), 'i') },
  });
  res.json(currentCompanyFromServer);
});

router.get('/:id', async (req, res) => {
  const currentCompany = await CompanyModel.findById(req.params.id).populate({
    path: 'reviews',
    populate: {
      path: 'author',
    },
  });

  res.json(currentCompany);
});

router.patch('/edit/:id', async (req, res) => {
  const newCompany = await CompanyModel.findById(req.params.id).populate({
    path: 'reviews',
    populate: {
      path: 'author',
    },
  });
  console.log(newCompany);
  console.log(req.body.userId);
  newCompany.graduates.push(req.body.userId);
  await newCompany.save();
  res.json(newCompany);
});

module.exports = router;
