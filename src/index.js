import React from 'react';
import ReactDom from 'react-dom';

//  Create a new compponent this produces HTML

// const App = function() {
//     return <div > Hi! < /div>;
// }


//same => identical to do functions
const App = () => {

    return <div > Hi! < /div>;

}


ReactDom.render( < App / > , document.querySelector('.container'));