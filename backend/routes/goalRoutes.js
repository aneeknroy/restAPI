const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Get Goals' })
})

router.post('/', (req, res) => {
    res.status(200).json({ message: 'Get Goals' })
})

// :id is the param for the PUT request
router.put('/:id', (req, res) => {
    res.status(200).json({ message: `Update Goal ${req.params.id}` })
})

router.delete('/', (req, res) => {
    res.status(200).json({ message: 'Get Goals' })
})


module.exports = router