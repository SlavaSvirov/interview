const { OAuth2Client } = require('google-auth-library')
const express = require('express');
const router = express.Router();
const reviewModel = require('../database/models/review');
const userModel = require('../database/models/user');

const client = new OAuth2Client(process.env.CLIENT_ID);

router
  .post("/", async (req, res) => {
    console.log(req.body);
    const { token } = req.body
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: "1074219333942-jlp6l6mu4i6p8ofasch5vkpsb0n20uo5.apps.googleusercontent.com"
    });
    // console.log(tiket);
    const { name, email, picture } = ticket.getPayload();
    let userDb = await userModel.findOne({ email: email })
    console.log(userDb);
    if (userDb) {
      req.session.user={id:userDb._id}
      console.log(req.session);
      res.json(userDb)
    }
    else{
    const user = await userModel.create({ email: email, avatar: picture, name: name })
    req.session.user= {id:user._id}
    res.json(user)
    }
  })
module.exports = router;

