var router = require('express').Router();
var User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
    //We call Users.find() to get a list of all the users from the database.
    //The find method returns a promise. The results are returned in JSON format with res.json(users).
});

router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});// will creat new user
  newUser.save()// the new user is saved to the database with the save() method
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;
