// Stefanie notes:  This is so tedious to me, especially because it takes
//me so long to do anything.  Could not follow how to get Cart in here
// during lecture.  Will rewatch the video later.

import { Counter } from './features/counter/Counter';
import React from 'react';
import {ProductList} from './features/product/ProductList';
import {Cart} from './features/cart/Cart';
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* <Counter /> */}
        <ProductList />
        <Cart />

      </header>
    </div>
  );
}

// function App() {
//   return (
//     <div>
//       <ProductCard></ProductCard>

//     </div>
//   );
// }

export default App;


// import './App.css';
// // import {
// //   BrowserRouter as Router,
// //   Switch,
// //   Route,
// //   Link
// // } from 'react-router-dom';
// import React from 'react';
// import ProductCard from './ProductCard'

// function App() {
//   return (
//     <div>
//       <ProductCard></ProductCard>

//     </div>
//   );
// }

// // export default function App(props) {
// //   return (
// //     <Router>
// //       <div>
// //         {/* <div className = "fullList"><h2>My Peeps</h2></div> */}
// //         <Switch>
// //           <Route exact path="/" component={Contact}></Route>
// //           <Route path="/detail/:id" component={ContactDetail}></Route>
// //         </Switch>
// //       </div>
// //     </Router>
// //   );
// // }

// export default App;


// // import { Counter } from './features/counter/Counter';
// // import ReactDom from 'react-dom';