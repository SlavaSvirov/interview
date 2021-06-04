const express = require('express');
const router = express.Router();


// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });



router
.get('/profile', (req, res) => { // все последние отзывы юзера
  // Reviews.find() 
})

.post('/profile', (req, res) => {
    // Reviews.Create() 
})
.delete('/profile', (req, res) => {
  // Reviews.FindByIdAndDelete 
})




module.exports = router;
