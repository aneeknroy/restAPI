const express = require('express')
const router = express.Router()
const { 
    getGoals, 
    setGoal, 
    updateGoal, 
    deleteGoal 
} = require('../controller/goalController')

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').delete(deleteGoal).put(updateGoal)


module.exports = router




//--------------------------------------------------------------------
// 2nd Iteration 
//router.get('/', getGoals)
// router.post('/', setGoal)
// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)

// 1st Iteration
// router.get('/', (req, res) => {
//     res.status(200).json({ message: 'Get Goals' })
// })

// router.post('/', (req, res) => {
//     res.status(200).json({ message: 'Set Goals' })
// })

// :id is the param for the PUT request
// router.put('/:id', (req, res) => {
//     res.status(200).json({ message: `Update Goal ${req.params.id}` })
// })

// :id is the param for the DELETE request
// router.delete('/:id', (req, res) => {
//     res.status(200).json({ message: `Delete Goal ${req.params.id}` })
// })
