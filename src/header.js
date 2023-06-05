import React from 'react';
import 'semantic-ui-css/semantic.min.css'

const Header = () => {
    return(
<h1 style={{paddingTop:"20px", paddingBottom:"20px"}}class="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-purple-400">Expense Tracker</span></h1>    );
    
}

export default Header;