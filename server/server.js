const express = require("express");
const app = express();
const cors = require("cors");
const expensePool = require("./db");
const userRouter = require("./routes/userRoutes");

app.use(cors());
app.use(express.json());

app.use('/api/v1/users',userRouter)

app.listen(5001, () => console.log("server listening at 5001🚀"));


/*
// create expense
app.post("/create", async (req, res) => {
  try {
    const { title, price } = req.body;
    const newExpense = await expensePool.query(
      "INSERT INTO EXPENSE_DETAILS (ed_title,ed_price,ed_completed) VALUES ($1,$2,$3)",
      [title, price, false]
    );
    return res.status(201).json(newExpense);
  } catch (error) {
    console.error(error);
  }
});

// get all expense
app.get("/all", async (req, res) => {
  try {
    const allExpenses = await expensePool.query(
      "SELECT * FROM EXPENSE_DETAILS"
    );
    return res.status(201).json(allExpenses.rows);
  } catch (error) {
    console.error(error);
  }
});

// edit a expense
app.put("/edit/:id", async (req, res) => {
  try {
    const {id} = req.params
    const { title, price, completed } = req.body;
    await expensePool.query(
      "UPDATE EXPENSE_DETAILS SET ED_TITLE = $1 , ED_PRICE=$2 , ED_COMPLETED=$3 WHERE ED_ID = $4",
      [title, price, completed,id]
    );
    return res.status(201).json("update success.");
  } catch (error) {
    console.error(error);
  }
});

app.delete('/delete/:id',async(req,res)=>{
    try {
        const {id}  = req.params
        await expensePool.query("DELETE FROM EXPENSE_DETAILS WHERE ED_ID=$1",[id])
        return res.status(201).json("delete success.")
    } catch (error) {
    console.error(error);
        
    }
})
*/