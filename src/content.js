import React from 'react';
import { useState } from 'react';
import './index.css';
import 'semantic-ui-css/semantic.min.css'

const Content = () => {

    // const transactions = [
    //     {
    //         date: "",
    //         amount: "",
    //         received:""
    //     },
    //     {
    //         date: "",
    //         amount: "",
    //         received: ""
    //     }
    // ]
    const [amount,setAmount] = useState(0);
    
    const [expense,setExpense] = useState('');

    const [date,setDate] = useState('');

    // const [display,setDisplay] = useState('');

    const handle_amount = (e) => {
        setAmount(Number(e.target.value));
    }

   const handle_expense = (e) => {
        setExpense(e.target.value);
    }

    const handle_date = (e) =>{
        setDate(e.target.value);
        
    }
    
    const [track_expense, setTrackExpense] = useState([]);

    var [total_amount, setTotalAmount] = useState(0);
    
    var [list,setList] = useState('');


    const handleClick = (e) => {
        var cal_total = 0;

         e.preventDefault();
        //  console.log(track_expense);
        //  track_expense.push({amount: amount, date: date, expense: expense});
         setTrackExpense([...track_expense, {amount: amount, date: date, expense: expense}]);
        //  setTrackExpense(track_expense);
         console.log(track_expense);
         setAmount('');
         setExpense('');
         setDate('');
         track_expense.forEach(x =>{
            cal_total += x.amount;
         });
         cal_total += amount;
         setTotalAmount(cal_total);
         setList(expense);

         
    };


    return(
       
        <>
        <div style={{
        display: "flex",
        alignItems: "center",
        height: "100%"
      }}>
        <div>
        <form>
            
            <div class="ui right labeled input">
                <label for="amount" class="ui label">Enter the Amount: </label>
                <input type="number" name = "amount"  value={amount} onChange={handle_amount} placeholder="Enter Amount" />
                {/* <h1>Amount = {amount}</h1> */}
            </div>
            <br></br>
            <div class="ui left corner labeled input" style={{paddingTop:'20px'}}>
                <label>Type of Expense: </label>
                <input type="text" name = "amount"  value={expense} onChange={handle_expense} placeholder="Enter Reason" />
                {/* <h1>Type of Expense = {expense}</h1> */}
                {/* <div class="ui left corner label">
                    <i class="asterisk icon"></i>
                </div> */}
            </div>

            <div style={{paddingTop:'20px'}}>
                <label>Enter the Date: </label>
                <input type="date" name = "amount"  value={amount} onChange={handle_date} placeholder="Enter Date" />
                {/* <h1>Date = {date}</h1> */}
            </div>
            
            <div style={{paddingTop:'20px'}}>
                <button class="ui secondary button" onClick={handleClick}>Add</button>
            </div>
            <p>{console.log(total_amount)}</p>
            
            <h1>Total Expense: {total_amount}</h1>
            {/* <p>Reason: {list}</p> */}
            <div>
            {track_expense.map((expense) => (
                <div>
                    <p>
                        <li>
                        Reason:  {expense.expense}
                        <br></br>
                        Amount:  {expense.amount}
                        <br></br>
                        Date:   {expense.date}
                        </li>
                        
                    </p>
                </div>
            ))}

            </div>

            
                        
        </form>
        </div>
        </div>
        </>
      

        


       
    );
}

export default Content;