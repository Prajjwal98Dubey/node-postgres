const Pool = require('pg').Pool
const dotenv = require('dotenv')
dotenv.config()
const expensePool = new Pool({
    user:"postgres",
    host:"localhost",
    database:"expense",
    port:5432,
    password:process.env.PG_ADMIN_PASS

})

module.exports = expensePool