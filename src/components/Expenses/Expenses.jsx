import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

// Assignment: Time to Practice: React & Component Basics
/*Complete the instructions mentioned in the above video.
In detail:
    Create a new component that is responsible for displaying expenses
    Add multiple ExpenseItem components in that component
    Keep the expenses data in the App component and pass that data into the newly created component
You can use this .css file for some styling for your Expenses 
*/

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
};

export default Expenses;
