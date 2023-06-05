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
                <input style={{width:"100%"}} type="number" name = "amount"  value={amount} onChange={handle_amount} placeholder="Enter Amount" />
                {/* <h1>Amount = {amount}</h1> */}
            </div>
            <br></br>
            <div class="ui right labeled input" style={{paddingTop:'20px'}}>
                <label for="amount" class="ui label">Type of Expense: </label>
                <input style={{width:"100%"}} type="text" name = "amount"  value={expense} onChange={handle_expense} placeholder="Enter Reason" />
                {/* <h1>Type of Expense = {expense}</h1> */}
                {/* <div class="ui left corner label">
                    <i class="asterisk icon"></i>
                </div> */}
            </div>
            <br></br>
            <div class="ui right labeled input" style={{paddingTop:'20px'}}>
                <label for="amount" class="ui label">Enter the Date: </label>
                <input style={{width:"100%"}} type="date" name = "amount"  value={amount} onChange={handle_date} placeholder="Enter Date" />
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
                // <div>
                //     <p>
                //         <li>
                //         Reason:  {expense.expense}
                //         <br></br>
                //         Amount:  {expense.amount}
                //         <br></br>
                //         Date:   {expense.date}
                //         </li>
                        
                //     </p>
                // </div>
<p ><dl class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}} class="flex flex-col pb-3">
        <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Amount:</dt>
        <dd class="text-lg font-semibold">{expense.amount}</dd>
    </div>
    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}} class="flex flex-col py-3">
        <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Reason:</dt>
        <dd class="text-lg font-semibold">{expense.expense}</dd>
    </div>
    <div style={{display:"flex", flexDirection:"row"}} class="flex flex-col pt-3">
        <dt style={{display:"flex", flexDirection:"row"}} class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Date:</dt>
        <dd style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}} class="text-lg font-semibold">{expense.date}</dd>
    </div>
</dl></p>


            ))}

            </div>

            
                        
        </form>
        </div>
        </div>
        </>
      

        


       
    );
}

export default Content;