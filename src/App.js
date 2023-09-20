import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    {
      id: "e1",
      title: "Tuitiion Fee",
      amount: 1000,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "petrol",
      amount: 1000,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e3",
      title: "Cloths",
      amount: 1000,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e4",
      title: "Food",
      amount: 1000,
      date: new Date(2020, 7, 14),
    },
  ];

  return (
    <div>
      <ExpenseItem expense={expense[0]}></ExpenseItem>
      <ExpenseItem expense={expense[1]}></ExpenseItem>
      <ExpenseItem expense={expense[2]}></ExpenseItem>
      <ExpenseItem expense={expense[3]}></ExpenseItem>
    </div>
  );
}

export default App;
