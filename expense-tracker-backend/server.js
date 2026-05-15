const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const expenseRoutes = require("./routes/expenseRoutes");

const errorHandler = require("./middleware/errorMiddleware");

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// DATABASE CONNECT
connectDB();

// ROUTES
app.use("/api/users", userRoutes);
app.use("/api/expenses", expenseRoutes);

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Expense Tracker API Running");
});

// GLOBAL ERROR HANDLER (must come after routes)
app.use(errorHandler);

// SERVER START
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
