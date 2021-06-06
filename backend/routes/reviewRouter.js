const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route('/newReview').post(async (req, res) => {
  const { body } = req.body;
  console.log(req.body);
  const author = req.session.user.id;
  if (req.file) {
    const review = await Tweet.create({
      body,
      author,
      image: `/img/${req.file.filename}`,
    });
    res.json(review);
  } else {
    const review = await Tweet.create({
      body,
      author,
    });
    res.json(review);
  }
});

module.exports = router;
