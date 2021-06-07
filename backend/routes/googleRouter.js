const { OAuth2Client } = require('google-auth-library')
const express = require('express');
const router = express.Router();
const reviewModel = require('../database/models/review');
const userModel = require('../database/models/user');

const client = new OAuth2Client(process.env.CLIENT_ID);

router
  .post("/", async (req, res) => {
    const { token } = req.body
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.CLIENT_ID
    });
    const { name, email, picture } = ticket.getPayload();
    let result = await userModel.findOne({ email: email })
    if (!result) {
      const user = await userModel.create({ email: email, avatar: picture ,name:name})
      req.session.userId = user.id
      res.status(201)
      res.json(user)
    }
 })
module.exports = router;
