// get expense details of specific user

const expensePool = require("../db");

const getUserExpenses = async (req, res) => {
  try {
    const { id } = req.params;
    /*
    const expenseList = await expensePool.query(
      "SELECT * FROM EXPENSE_DETAILS WHERE ED_USER=$1",
      [id]
    );
    */
    // USING JOINS
    const expenseList = await expensePool.query(
      "SELECT EXPENSE_DETAILS.ED_TITLE,EXPENSE_DETAILS.ED_PRICE,USER_DETAILS.USER_NAME FROM EXPENSE_DETAILS INNER JOIN USER_DETAILS ON EXPENSE_DETAILS.ED_USER = USER_DETAILS.USER_ID WHERE USER_DETAILS.USER_ID=$1",
      [id]
    );
    return res.status(201).json(expenseList.rows);
  } catch (error) {
    console.error(error);
  }
};

// create expense
const createUserExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, price } = req.body;
    const newExpense = await expensePool.query(
      "INSERT INTO EXPENSE_DETAILS (ed_title,ed_price,ed_user) VALUES ($1,$2,$3)",
      [title, price, id]
    );
    return res.status(201).json(newExpense);
  } catch (error) {
    console.error(error);
  }
};

// edit a expense
const editExpense=  async (req, res) => {
  try {
    const userId = req.query.userId
    const expenseId = req.query.id
    const { title, price } = req.body;
    await expensePool.query(
      "UPDATE EXPENSE_DETAILS SET ED_TITLE = $1 , ED_PRICE=$2  WHERE ED_ID = $3 and ED_USER = $4",
      [title, price, expenseId,userId]
    );
    return res.status(201).json("update success.");
  } catch (error) {
    console.error(error);
  }
};

const deleteExpense=  async (req, res) => {
  try {
    const userId = req.query.userId
    const expenseId = req.query.id
    await expensePool.query("DELETE FROM EXPENSE_DETAILS WHERE ED_USER=$1 AND ED_ID=$2", [userId,expenseId]);
    return res.status(201).json("delete success.");
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getUserExpenses, createUserExpense,editExpense ,deleteExpense};
