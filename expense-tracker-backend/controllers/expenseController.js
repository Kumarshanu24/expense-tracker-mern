const Expense = require("../models/Expense");

exports.addExpense = async (req, res) => {
  try {
    const expense = new Expense(req.body);
    await expense.save();
    res.send("Expense Added");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error");
  }
};

// GET ALL EXPENSES
exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error fetching expenses");
  }
};

// DELETE EXPENSE
exports.deleteExpense = async (req, res) => {
  try {
    const id = req.params.id;

    await Expense.findByIdAndDelete(id);

    res.send("Expense Deleted");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error deleting expense");
  }
};

// UPDATE EXPENSE
exports.updateExpense = async (req, res) => {
  try {
    const id = req.params.id;

    const updatedExpense = await Expense.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    res.json(updatedExpense);

  } catch (error) {
    console.log(error);
    res.status(500).send("Error updating expense");
  }
};

exports.addExpense = async (req, res) => {
  try {
    const expense = new Expense({
      ...req.body,
      userId: req.user.id
    });

    await expense.save();

    res.send("Expense Added");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error");
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({
      userId: req.user.id
    });

    res.json(expenses);
  } catch (error) {
    res.status(500).send("Error fetching");
  }
};
