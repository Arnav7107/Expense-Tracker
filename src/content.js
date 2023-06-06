import React from 'react';
import { useState } from 'react';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

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

    const [received, setReceived] = useState('');

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

    const time = new Date();
    const showTime = time.getHours()
        + ':' + time.getMinutes()
        + ":" + time.getSeconds();
    
        // const [showTime, setShowTime] = useState(showTime)
    const [track_expense, setTrackExpense] = useState([]);

    var [total_amount, setTotalAmount] = useState(0);

    var [total_received, setTotalReceived] = useState(0);
    
    var [list,setList] = useState('');

    const [track_received, setTrackReceived] = useState([]);

    const handleSpent = (e) => {
        var cal_spent = 0;

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
            cal_spent += x.amount;
         });
         cal_spent += amount;
         setTotalAmount(cal_spent);
         setList(expense);

         
    };

    const handleReceived = (e) => {

        var cal_received = 0;
        e.preventDefault();
        setTrackReceived([...track_received, {amount:amount, date:date, expense:expense}])
        setAmount('');
         setExpense('');
         setDate('');
         track_received.forEach(x =>{
            cal_received += x.amount;
         });
         cal_received += amount;
         setTotalReceived(cal_received);
         setList(expense);
    }


    return(
       
        <>
        <div style={{
        display: "flex",
        alignItems: "center",
        height: "100%"
      }}>
        <div>
        <form className='w-2/3' onSubmit={() => {}}>
            
            <div class="ui right labeled input w-full">
                <label for="amount" class="ui label">Enter the Amount: </label>
                <input style={{width:"100%"}} type="number" name = "amount"  value={amount} onChange={handle_amount} placeholder="Enter Amount" required />
                {/* <h1>Amount = {amount}</h1> */}
            </div>
            <br></br>
            <div class="ui right labeled input w-full" style={{paddingTop:'20px'}}>
                <label for="amount" class="ui label">Type of Expense: </label>
                <input style={{width:"100%"}} type="text" name = "amount"  value={expense} onChange={handle_expense} placeholder="Enter Reason" required />
                {/* <h1>Type of Expense = {expense}</h1> */}
                {/* <div class="ui left corner label">
                    <i class="asterisk icon"></i>
                </div> */}
            </div>
            <br></br>
            <div class="ui right labeled input w-full" style={{paddingTop:'20px'}}>
                <label for="amount" class="ui label">Enter the Date: </label>
                <input style={{width:"100%"}} type="date" name = "amount"  value={date} onChange={handle_date} placeholder="Enter Date" required />
                {/* <h1>Date = {date}</h1> */}
            </div>
            
            <div style={{display:"flex", flexDirection:"row",paddingTop:'20px'}}>
                <button  class="ui secondary button" onClick={handleSpent}>Spent</button>
                 &nbsp;&nbsp;&nbsp;
                <button  class="ui secondary button" onClick={handleReceived}>Received</button>
            </div>
            
            <h1>Total Expense: {total_amount}</h1>
            <h1>Total Received: {total_received}</h1>
            <h1>Net: {total_amount-total_received}</h1>
            {/* <p>Reason: {list}</p> */}
            <div>
                
           
                {/* // <div>
                //     <p>
                //         <li>
                //         Reason:  {expense.expense}
                //         <br></br>
                //         Amount:  {expense.amount}
                //         <br></br>
                //         Date:   {expense.date}
                //         </li>
                        
                //     </p>
                // </div> */}
{/* <p ><dl class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}} class="flex flex-col pb-3">
        <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Amount:</dt>
        <dd class="text-lg font-semibold">{expense.amount}</dd>
    </div>
    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}} class="flex flex-col py-3">
        <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Reason:</dt>
        <dd class="text-lg font-semibold">{expense.expense}</dd>
    </div>
    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}} class="flex flex-col pt-3">
        <dt style={{display:"flex", flexDirection:"row"}} class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Date:</dt>
        <dd style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}} class="text-lg font-semibold">{expense.date}</dd>
    </div>
</dl></p> */}


<table class="table">
        <tr style={{paddingRight:"100px"}}>
            <th class="row_heading table-primary" style={{paddingRight:"100px"}}>Amount</th>
            <th class="row_heading table-primary" style={{paddingRight:"100px"}}>Expense</th>
            <th class="row_heading table-primary"  style={{paddingRight:"100px"}}>Date</th>
            <th class="row_heading table-primary"  style={{paddingRight:"100px"}}>Time</th>
        </tr>
        {track_expense.length > 0 ?
        (track_expense.map((expense) => (
        <tr>
            <td>{expense.amount}</td>
            <td>{expense.expense}</td>
            <td>{expense.date}</td>
            <td>{showTime}</td>
        </tr>
        )))
    :
    (
        <div>No expenses yet</div>
    )}

    </table>

    <table class="table">
        <tr style={{paddingRight:"100px"}}>
            <th class="row_heading table-primary" style={{paddingRight:"100px"}}>Amount</th>
            <th class="row_heading table-primary" style={{paddingRight:"100px"}}>Received</th>
            <th class="row_heading table-primary"  style={{paddingRight:"100px"}}>Date</th>
            <th class="row_heading table-primary"  style={{paddingRight:"100px"}}>Time</th>
        </tr>
        {track_received.length > 0 ?
        (track_received.map((expense) => (
        <tr>
            <td>{expense.amount}</td>
            <td>{expense.expense}</td>
            <td>{expense.date}</td>
            <td>{showTime}</td>
        </tr>
        )))
    :
    (
        <div>No receiving yet</div>
    )}

    </table>


          
            </div>

            
                        
        </form>


{/* <table class="table">
    <thead class="table-primary">
        asd
    </thead>
    <thead class="table-primary">
        asd
    </thead>
    <tr>
        <td>jgjh</td>
        <td>jgjh</td>
    </tr>
</table> */}

        </div>
        </div>
        </>
      

        


       
    );
}

export default Content;