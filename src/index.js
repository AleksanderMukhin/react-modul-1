import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import data from './data.json';
import {Card} from './components/Card'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// const h1 = React.createElement('h1', {id:1}, classNameName:"title", children: ["Hello World" , "React"])
// console.log("🚀  h1", h1)
// root.render(h1)




  
console.log(Card)

ReactDOM.createRoot(document.getElementById('root')).render(<Card />)






{/* // root.render(
//   <React.StrictMode>
//     <App />

//   </React.StrictMode>
// ); */}

