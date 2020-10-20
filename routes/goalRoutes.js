const express = require('express')
const router = express.Router();

// Goals Model
const Goal = require('../models/GoalModel.js');

// @route GET /goal
// @desc Get ALL goals
router.get('/', (req, res) => {
    // Fetch all goals from database
    Goal.find({}, (error, goals) => {
        if (error) console.log(error)
        res.json(goals)
    })
})
// @route GET /goal
// @desc Get a single goal
router.get('/:id', (req, res) => {
    // Fetch all goals from database
    Goal.findById({ _id: req.params.id }, (error, goal) => {
        if (error) console.log(error)
        res.json(goal)
    })
})
// @route POST /goals
// @desc  Create a goals
router.post('/', (req, res) => {
    // Create a goal
    const newGoal = new Goal({
        name: req.body.name,
        description: req.body.description,
        completeDate: req.body.completeDate
    }); newGoal.save((err, goal) => {
        if (err) console.log(err)
        res.json(goal)
    })
})
// @route DELETE api/goal/:id
// @desc  Delete a goal
router.delete('/:id', (req, res) => {
    // Delete a goal from database
    Goal.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            console.log(err)
            res.json({ success: false })
        } else {
            res.json({ success: true })
        }
    })
})
module.exports = router;