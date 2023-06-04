import Header from './header.js';
import Content from './content.js';
import 'semantic-ui-css/semantic.min.css'


function App() {
  return(
    // <div style={{
    //   display: "flex",
    //   alignItems: "center",
    //   height: "100%"
    // }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%"
      }} class = "bg-teal-900 min-h-screen center">
      <Header />
    <Content />
  
    </div>
    
    // </div>
    
   
  );
  
  
}

export default App;

// import React from 'react';
// import TextField from '@material-ui/core/TextField';

// const App = () => {

// return (
// 	<div style={{
// 	margin: 'auto',
// 	display: 'block',
// 	width: 'fit-content'
// 	}}>
// 	<h3>How to create Date Picker in ReactJS?</h3>
// 	<TextField
// 		id="date"
// 		label="Choose your birthdate"
// 		type="date"
// 		defaultValue="2017-05-24"
// 		InputLabelProps={{
// 		shrink: true,
// 		}}
// 	/>
// 	</div>
// );
// }

// export default App;

