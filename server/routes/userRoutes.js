const { getUserExpenses, createUserExpense, editExpense, deleteExpense } = require('../controllers/userControllers')

const userRouter = require('express').Router()

userRouter.route('/create/:id').post(createUserExpense)
userRouter.route('/edit').put(editExpense)
userRouter.route('/delete').delete(deleteExpense)
userRouter.route('/all/:id').get(getUserExpenses)

module.exports = userRouter