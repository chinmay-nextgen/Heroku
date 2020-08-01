const router = require('express').Router();
var Exercise = require('../models/exercise.model');
router.route('/').get((req,res)=>{
  Exercise.find()
  .then( exercises => res.json(exercises))
  .catch( err=> res.status(400).json('Error: ' + err))
})

router.route('/add').post((req,res)=>{
  var username =req.body.username;
  var description = req.body.description;
  var duration = Number(req.body.duration);//it would be in string form
  var date = Date.parse(req.body.date);
  var newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });
  newExercise.save()
  .then(()=>res.json('Exercise is added'))
  .catch( err=> res.status(400).json('Error: ' + err))

})

router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
//The /:id GET endpoint returns an exercise item given an id. .
//The /:id DELETE endpoint deletes an exercise item given an id

router.route('/update/:id').post((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
//Finally, the /update/:id POST endpoint updates an existing exercise item.
//For this endpoint, we first retrieve the old exercise item from the database based on the id.
//Then, we set the exercise property values to what’s available in the request body.
// Finally, we call exercise.save to save the updated object in the database.
module.exports = router;
