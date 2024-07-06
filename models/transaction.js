const transactions = [
    {
      id: 1,
      item_name: "Income",
      amount: 2000,
      date: new Date('2024-07-01').toLocaleDateString(),
      from: "Employer",
      category: "Income"
    },
    {
      id: 2,
      item_name: "Savings",
      amount: 500,
      date: new Date('2024-07-02').toLocaleDateString(),
      from: "Bank",
      category: "Savings"
    },
    {
      id: 3,
      item_name: "Cat Food",
      amount: 30,
      date: new Date('2024-07-03').toLocaleDateString(),
      from: "Pet Store",
      category: "Pets"
    },
    {
      id: 4,
      item_name: "Groceries",
      amount: 150,
      date: new Date('2024-07-04').toLocaleDateString(),
      from: "Grocery Store",
      category: "Food"
    },
    {
      id: 5,
      item_name: "Coffee",
      amount: 5,
      date: new Date('2024-07-05').toLocaleDateString(),
      from: "Cafe",
      category: "Food"
    }
  ];
  
  console.log(transactions);

  module.exports = transactions;