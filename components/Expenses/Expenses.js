import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filterValue,setFilterValue] = useState('2020');
  const retreivingFilterValue = (fValue) =>{
    console.log("Expenses has got this value : " + fValue);
    setFilterValue(fValue);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterValue} onGettingFilterValue={retreivingFilterValue}/>
      {props.items.map((item)=>{
        if(item.date.getFullYear() != filterValue){
          return;
        }
      return (
          <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
      );
      }
      )}
      {/* <ExpenseItem
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
      /> */}
    </Card>
  );
}

export default Expenses;
