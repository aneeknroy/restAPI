const asyncHandler = require('express-async-handler')

// @desc    Get goals
// @route   GET /api/goals
// @access  private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message : 'Get Goals' })
})

// @desc    Set goals
// @route   POST /api/goals
// @access  private
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400) // 400 status means error
        throw new Error('Please add a Text Field')
    }
    res.status(200).json({ message : 'Set Goals' })
})

// @desc    Update goals
// @route   PUT /api/goal/:id
// @access  private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update Goal ${req.params.id}` })
})

// @desc    Delete goals
// @route   DELETE /api/goal/:id
// @access  private
const deleteGoal = asyncHandler (async (req, res) => {
    res.status(200).json({ message: `Delete Goal ${req.params.id}` })
})


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}