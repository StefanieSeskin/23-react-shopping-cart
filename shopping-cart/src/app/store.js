
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import productReducer from '../features/product/productSlice';
import logger from 'redux-logger'

export default configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
    //put productReducer and cartReducer here imported from the slice
    //slice is a bundle that contains both state and actions that enable
    //you to change that state
    // this section is called a name space.  this would be name: product
    //in the slice.  Initial state e.g. products:[] (empty array)
    //-- an OBJECT with a key
    // reducers on the slice: function (method) is triggered by dispatch
    // productSlice.actions IS AN ACTION
    //check out setTimeout (a "thunk").  Need to delay dispatch of get request
    //just like in last homework.  Asynchonous
    //
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});
